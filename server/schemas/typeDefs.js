const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    briefs: [Brief]
  }

  type Project {
    _id: ID!
    title: String!
    intro: String!
    budget_description: String
    project_description: String!
    submission_deadline: String
    project_reqs: [String]!
    brief_reqs: [String]!
    image_urls: [ String ]
    user: User
    briefs: [Brief]
  }

  type Brief {
    _id: ID
    title: String!
    brief_content: [String]!
    image_urls: [String]
    date_created: String
    user: User
    project: Project
  }

  input inputBrief {
    title: String!
    brief_content: [String]! 
    image_urls: [String]
  }

  input inputProject {
    title: String!
    intro: String!
    budget_description: String
    project_description: String!
    submission_deadline: String
    project_reqs: [String]!
    brief_reqs: [String]!
    image_urls: [ String ]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    # users: [User]
    user(username: String!): User
    me: User
    briefs: [Brief]!
    brief(briefId: ID!): Brief
    projects: [Project]!
    project(projectID: ID!): Project
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBrief(entry: inputBrief): Brief
    removeBrief(briefId: ID!): Brief
    addProject(entry: inputProject): Project
    removeProject(projectId: ID!): Project
  }
`;

module.exports = typeDefs;
