import gql from 'graphql-tag';

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