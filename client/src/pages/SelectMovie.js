import React, { useState, useEffect } from 'react';
// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/react-hooks';
// import { SAVE_MOVIE } from '../utils/mutations';

const SelectMovie = () => {
  const [formState, setFormState] = useState({ date: '', genre: '' });

  // const [movieState, setMovieState] = useState([]);

  const [state, setState] = useState('');

  // const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

  // const [saveMovie, { error }] = useMutation(SAVE_MOVIE);

  // useEffect(() => {
  //   return () => saveMovieIds(savedMovieIds);
  // });

  var random;
  var max = 99
  function findRandom() {
    random = Math.floor(Math.random() * max)
    // console.log(random)
  };

  const getMovie = async() => {
    const inputDate = formState.date;
    const inputGenre = formState.genre;

    if(!formState) {
      return false;
    }

    try {

      const data = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_IMDB_APIKEY}/?title_type=feature&release_date=${inputDate}&genres=${inputGenre}&countries=us&languages=en&count=100`);

      const jsonData = await data.json();
      const selectedMovie = jsonData.results[random];
      // console.log(jsonData.results[random]);

      // setMovieState({
      //   movieId: selectedMovie.id,
      //   title: selectedMovie.title,
      //   year: selectedMovie.description,
      //   image: selectedMovie.image,
      //   plot: selectedMovie.plot
      // });
      // console.log(movieState);

      const movieData = {
        movieId: selectedMovie.id,
        title: selectedMovie.title,
        year: selectedMovie.description,
        image: selectedMovie.image,
        plot: selectedMovie.plot
      };
      // setMovieState(movieData);
      setState('1');
      // console.log(movieState);

      // console.log(movieData);

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

    <main>
        {state===''
        ?
      <div>
        <h2>Select your movie!</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="genre">Genres:</label>
            <select
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
              <option value="documentary">Documentary</option>
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      : <div>
        <h2>Your movie</h2>
        <h3>{movieData.title}</h3>
      </div>
      }

    </main>
  );
}
export default SelectMovie;




// const SelectMovie = (movieState) => {



//   return (

//     <main>
//       <div>
//         <MovieForm />   
//         <div>
          
//           <h2>Your Movie is:</h2>
//           <h3>{movieState.title}</h3>
//         </div>
//       </div>
//     </main>
//   );

// }

// export default SelectMovie;