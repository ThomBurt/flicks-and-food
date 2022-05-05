import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_MOVIE } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

const SearchMovies = () => {
  // create state for holding returned imdb api data
  const [searchedMovies, setSearchedMovies] = useState([]);
  // create state for holding our search field data
  // const [searchInput, setSearchInput] = useState('');
  const [formState, setFormState] = useState({ date: '', genre: '' });


  // create state to hold saved bookId values
  // const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());
  const [saveMovie, { error }] = useMutation(SAVE_MOVIE);

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  // useEffect(() => {
  //   return () => saveBookIds(savedBookIds);
  // });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!formState) {
      return false;
    }

    try {
      const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_IMDB_APIKEY}/?title_type=feature&release_date=${formState.date}&genres=${formState.genre}&countries=us&languages=en&count=100`);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const movieData = items.map((movie) => ({
        movieId: movie.id,
        title: movie.title,
        year: movie.description,
        image: movie.image,
        plot: movie.plot
      }));

      setSearchedMovies(movieData);
      setFormState('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveMovie = async (movieId) => {
    // find the book in `searchedBooks` state by the matching id
    const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);

    // get token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    try {
      await saveMovie({
        variables: { movieData: { ...movieToSave } },
      });
      // console.log(savedMovieIds);
      // setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className='text-light bg-dark'>
        <Container>
          <h1>Search for Movies!</h1>
          <Form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="genre">Genres:</label>
            <select
              name="genre"
              id="genre"
              // onChange={handleChange}
            >
              <option value="">Please select a genre</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="biography">Biography</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="drama">Drama</option>
              <option value="family">Family</option>
              <option value="fantasy">Fantasy</option>
              <option value="film_noir">Film-Noir</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="music">Music</option>
              <option value="musical">Musical</option>
              <option value="mystery">Mystery</option>
              <option value="news">News</option>
              <option value="romance">Romance</option>
              <option value="sci_fi">Sci-Fi</option>
              <option value="sport">Sport</option>
              <option value="thriller">Thriller</option>
              <option value="war">War</option>
              <option value="western">Western</option>

            </select>
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="date">Year Range:</label>
            <select
              name="date"
              id="date"
              // onChange={handleChange}
            >
              <option value="">Please select a year range</option>
              <option value="2010-01-01,">2010 - Today</option>
              <option value="1990-01-01,2010-01-01">1990 - 2010</option>
              <option value="1970-01-01,1990-01-01">1970 - 1990</option>
              <option value="1950-01-01,1970-01-01">1950 - 1970</option>
              <option value="1930-01-01,1950-01-01">1930 - 1950</option>
            </select>
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
          </Form>
        </Container>
      </div>

      <Container>
        <h2>
          {searchedMovies.length
            ? `Viewing ${searchedMovies.length} results:`
            : 'Search for a movie to begin'}
        </h2>
        <div>
          {searchedMovies.map((movie) => {
            return (
              <Card key={movie.movieId} border='dark'>
                {movie.image ? (
                  <Card.Img src={movie.image} alt={`The cover for ${movie.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p className='small'>Year: {movie.year}</p>
                  <Card.Text>{movie.plot}</Card.Text>
                  {/* {Auth.loggedIn() && ( */}
                    <Button
                      // disabled={savedMovieIds?.some((savedId) => savedId === movie.movieId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveMovie(movie.movieId)}>
                      {/* {savedMovieIds?.some((savedId) => savedId === movie.moiveId) */}
                        {/* ? 'Book Already Saved!'
                        : 'Save This Book!'} */}
                    </Button>
                  {/* )} */}
                  {error && <span className="ml-2">Something went wrong...</span>}
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default SearchMovies;