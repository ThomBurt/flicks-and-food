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

//     add?    _id username email
export const SAVE_MOVIE = gql`
    mutation saveMovie($movieData: MovieInput!) {
        saveMovie(movieData: $movieData) {
        savedMovies {
          movieId,
          title,
          year,
          image,
          plot
          }
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