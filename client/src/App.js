import SelectMovie from './pages/SelectMovie';
import React from 'react'
import './App.css';
import { NavBar } from './components/Navbar/Navbar';



function App() {
  return (
    <div>
      <NavBar />
      <SelectMovie></SelectMovie>
    </div>
  
  );
}
export default App;
