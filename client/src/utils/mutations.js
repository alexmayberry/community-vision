import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
  removeUser(userId: $userId) {
    _id
    briefs {
      _id
      title
    }
    projects {
      _id
      title
    }
    username
    email
  }
}
`;

export const ADD_PROJECT = gql`
  mutation addProject($entry: inputProject) {
    addProject(entry: $entry) {
      _id
      title
      project_description
      intro
      project_reqs
      brief_reqs
      budget_description
      submission_deadline
      image_urls
      user {
        _id
        username
      }
    }
  }
`

export const REMOVE_PROJECT = gql`
  mutation removeProject($projectId: ID!) {
    removeProject(projectId: $projectId) {
      _id
      title
      project_description
      intro
      project_reqs
      brief_reqs
      image_urls
      submission_deadline
      budget_description
      briefs {
        _id
        title
      }
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BRIEF = gql`
  mutation addBrief($entry: inputBrief) {
    addBrief(entry: $entry) {
      _id
      title
      brief_content
      date_created
      image_urls
      project {
        _id
        title
        image_urls
      }
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_BRIEF = gql`
  mutation removeBrief($briefId: ID!) {
    removeBrief(briefId: $briefId) {
      _id
      title
      brief_content
      date_created
      image_urls
      project {
        _id
        title
      }
      user {
        _id
        username
      }
    }
  }
`;
