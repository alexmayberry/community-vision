import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query projects {
    projects {
    _id
    title
    image_url
    project_description
    submission_deadline
    user {
      _id
      username
    }
    briefs {
      _id
      title
      brief_content
      date_created
      image_url
    }
  }
  }
`;

export const QUERY_PROJECT = gql`
  query Project($projectId: ID!) {
  project(projectId: $projectId) {
    _id
    title
    project_description
    intro
    project_reqs
    budget_description
    submission_deadline
    image_url
    brief_reqs
    user {
      _id
      username
    }
    briefs {
      _id
      title
      brief_content
      date_created
      image_url
      # user {
      #   username
      #   _id
      # }
    }
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      briefs {
        _id
        title
        brief_content
        image_url
        date_created
        # project {
        #   _id
        #   title
        # }
      }
      projects {
        _id
        title
        project_description
        image_url
      }
    }
  }
`;
