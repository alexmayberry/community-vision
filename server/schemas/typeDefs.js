const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    briefs: [Brief]
    projects: [Project]
  }

  type SimpleUser {
    _id: ID!
    username: String
    email: String
  }

  type Project {
    _id: ID!
    title: String
    intro: String
    budget_description: String
    project_description: String
    submission_deadline: String
    project_reqs: [String]
    brief_reqs: [String]
    image_url: String 
    user: SimpleUser
    briefs: [Brief]
  }

  type UserProject {
    _id: ID!
    title: String
    intro: String
    budget_description: String
    project_description: String
    submission_deadline: String
    project_reqs: [String]
    brief_reqs: [String]!
    image_url: String
    user: SimpleUser
    briefs: [Brief]
  }

  type Brief {
    _id: ID!
    title: String
    brief_content: [String]
    image_url: String
    date_created: String
    # user: SimpleUser
    project: Project
  }


  input inputBrief {
    title: String
    brief_content: [String]
    image_url: String
    project: ID
  }

  input inputProject {
    title: String!
    intro: String!
    budget_description: String
    project_description: String!
    submission_deadline: String
    project_reqs: [String]!
    brief_reqs: [String]!
    image_url: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    briefs: [Brief]
    brief(briefId: ID!): Brief
    projects: [Project]
    project(projectId: ID!): Project
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    addBrief(entry: inputBrief): Brief
    removeBrief(briefId: ID!): Brief
    addProject(entry: inputProject): Project
    removeProject(projectId: ID!): Project
  }
`;

module.exports = typeDefs;
