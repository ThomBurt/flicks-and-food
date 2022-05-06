const { AuthenticationError } = require('apollo-server-express');
const { User, Experience } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('experiences');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('experiences');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('experiences');
    },
    // experiences: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Experience.find(params).sort({ createdAt: -1 });
    // }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    // addExperience: async (parent, args, context) => {
    //   if (context.user) {
    //     const experience = await Experience.create({ ...args, username: context.user.username });

    //     await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { experiences: experience._id } },
    //       { new: true }
    //     );

    //     return experience;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // },
  //   saveMovie: async (_parent, { movieData }, context) => {
  //     if (context.user) {
  //         const updatedUser = await User.findByIdAndUpdate(
  //             { _id: context.user._id },
  //             { $push: { savedMovies: movieData } },
  //             { new: true }
  //         );
  //         return updatedUser;
  //     }
  //     throw new AuthenticationError('You need to be logged in!');
  // },
  }
};

module.exports = resolvers;