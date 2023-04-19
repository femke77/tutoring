const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    first_name: String!
    last_name: String!
    email: String!
    phone: String!
    zip_code: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(first_name: String!, last_name: String!, phone: String!, zip_code: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
