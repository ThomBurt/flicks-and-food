const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    experiences: String
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
  }

  type Query {
    drink: [Drink]
  }

  type Restaurant {
    restaurantId: ID!
    name: String
    location: String
    url: String
    image_url: String
  }

  type DrinkCategories {
    categoryId: ID!
    name: String
  }

  type Drink {
    drinkId: ID!
    name: String
    ingredients: String
    category: [DrinkCategories]
    
  }
`;

module.exports = typeDefs;