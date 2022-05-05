const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    experiences: String
  }

  type Movie {
    movieId: String!
    year: String
    image: String
    image: String
    title: String
  }

  input MovieInput {
    movieId: String!
    year: String
    image: String
    image: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMovie(movieData: MovieInput): User
  }
`;

module.exports = typeDefs;