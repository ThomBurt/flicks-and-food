import React, { useState } from 'react';
import './SelectDrink.css';
// import { Icon } from 'semantic-ui-react';
<<<<<<< HEAD
=======
import { FaBeer } from 'react-icons/fa';
import { FiRefreshCw } from "react-icons/fi";
import { BsArrowRightCircleFill } from "react-icons/bs";
>>>>>>> b3df81d3eaa872dee54a1ba7dcc1abdeadae2eec

const SelectDrink = () => {
    const [drinkState, setDrinkState] = useState({});


    const getDrink = async() => {
    const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/random.php`);
    
    const jsonData = await response.json();
    const selectedDrink = jsonData.drinks[0];
    // const drinkName = jsonData.drinks[0].strDrink;

    console.log(jsonData);

    if (!response.ok) {
        throw new Error('something went wrong!');
      }
      
      const drinkData = {
        name: selectedDrink.strDrink,
        image: selectedDrink.strDrinkThumb,
        instructions: selectedDrink.strInstructions
      };
      console.log(drinkData);
      setDrinkState(drinkData);
      console.log(drinkState.name);

      localStorage.setItem('drinkInfo', JSON.stringify(drinkData.name));
      localStorage.setItem('drinkInfoImg', JSON.stringify(drinkData.image));

   
  
    }

        const onSubmit = async (e) => {
          getDrink();
          
          let resultsDiv = document.getElementById('results-div');
          resultsDiv.classList.remove('div-hide');

          let buttonDiv = document.getElementById('main-button');
          buttonDiv.classList.add('div-hide');
      }

      const onRefresh = async (e) => {
        getDrink();
      }

    return(
        <main>
            <div className='cocktail-button-div' id="main-button">
<<<<<<< HEAD
                <button className='btn d-block w-50 cocktail-button' onClick={(onSubmit)}>Click here to choose your Cocktail {/*<Icon name="glass martini" />*/}</button>
=======
                <button className='btn d-block w-50 cocktail-button' onClick={(onSubmit)}>Click here to choose your Cocktail <FaBeer /></button>
>>>>>>> b3df81d3eaa872dee54a1ba7dcc1abdeadae2eec
            </div>


            : <div className='flex-row justify-center mb-4 div-hide' id="results-div">
                {/* <h2>TONIGHT YOU'RE WATCHING</h2> */}
                <div className="movie-card">
                  <div className="movie-card-header">
                  <h3 >{drinkState.name}</h3> 
<<<<<<< HEAD
                  <button className='refresh-button' onClick={(onRefresh)}>{/*<Icon name='refresh'/>*/}</button>
=======
                  <button className='refresh-button' onClick={(onRefresh)}><FiRefreshCw /></button>
>>>>>>> b3df81d3eaa872dee54a1ba7dcc1abdeadae2eec
                  <div className='refresh-text'>Refresh for a different choice</div>
                  </div>
                
                <div className="movie-card-body">
                    <img className="movie-img" src={drinkState.image} alt="drink"/>
                    <p>{drinkState.instructions}</p>
                </div>
                </div>
                <div className='link-btn mt-3'>
                <a href='/history' className='btn d-block w-100 p-3 cocktail-button'>
<<<<<<< HEAD
                    It's time to check out your evening! {/*<Icon name="long arrow alternate right" />*/}
=======
                    It's time to check out your evening! <BsArrowRightCircleFill />
>>>>>>> b3df81d3eaa872dee54a1ba7dcc1abdeadae2eec
                </a>
                </div>
            </div>
        </main>
    )
}

export default SelectDrink;