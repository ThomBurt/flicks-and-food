import React, { useState } from 'react';
// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/react-hooks';
// import { SAVE_MOVIE } from '../utils/mutations';
//import { Spinner } from '../../components/Yelp/Spinner/Spinner';
import './SelectMovie.css';

const SelectMovie = () => {
  const [formState, setFormState] = useState({ date: '', genre: '' });

  const [movieState, setMovieState] = useState({});

  // const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

  // const [saveMovie, { error }] = useMutation(SAVE_MOVIE);

  // useEffect(() => {
  //   return () => saveMovieIds(savedMovieIds);
  // });

  var random;
  var max = 99
  function findRandom() {
    random = Math.floor(Math.random() * max)
    console.log(random)
  };

  const getMovie = async() => {
    const inputDate = formState.date;
    const inputGenre = formState.genre;

    if(!formState) {
      return false;
    }

    try {

      const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_IMDB_APIKEY}/?title_type=feature&release_date=${inputDate}&genres=${inputGenre}&countries=us&languages=en&count=100`);

      const jsonData = await response.json();
      const selectedMovie = jsonData.results[random]


      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      
      const movieData = {
        movieId: selectedMovie.id,
        title: selectedMovie.title,
        year: selectedMovie.description,
        image: selectedMovie.image,
        plot: selectedMovie.plot
      };
      console.log(movieData);
      setMovieState(movieData);
      console.log(movieState);

    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    findRandom();

    getMovie();

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  return (

    <main className='flex-row justify-center mb-4 mt-3'>
        {!movieState.title
        ?
      <div className="card">
        <h2 className="card-header">Select your movie!</h2>
        <div className="card-body">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label className="form-label" htmlFor="genre">Genre:</label>
            <select
              className="form-input"
              name="genre"
              id="genre"
              onChange={handleChange}
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
            <label className="form-label" htmlFor="date">Year Range:</label>
            <select
              className="form-input"
              name="date"
              id="date"
              onChange={handleChange}
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
            <button className='btn d-block w-100' type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>

      : <div className='flex-row justify-center mb-4'>
        <h2>TONIGHT YOU'RE WATCHING</h2>
        <div className="movie-card">
          <h3 className="movie-card-header">{movieState.title} {movieState.year}</h3>
          <div className="movie-card-body">
            <img className="movie-img" src={movieState.image} alt="movie"/>
            <p>{movieState.plot}</p>
          </div>
        </div>
        <div className='link-btn mt-3'>
          <a href='/dinner' className='btn d-block w-100'>
            Now pick dinner!
          </a>
        </div>
      </div>
      }

    </main>
  );
}
export default SelectMovie;