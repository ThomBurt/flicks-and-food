import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

// Trying to get the experience working
export const QUERY_EXPERIENCE = gql`
query experiences($username: String) {
  experiences(username: $username) {
    movie
    meal
    createdAt
    username
  }
}
`;