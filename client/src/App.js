import SelectMovie from './pages/SelectMovie';
import React from 'react'
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
// import SearchMovies from './pages/SearchMovies';



function App() {
  return (
    <div>
      <NavBar />
      <SelectMovie />
    </div>
  
  );
}
export default App;
