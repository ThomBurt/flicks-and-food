import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home'
import { GetStarted } from './components/GetStarted/GetStarted'
import { History } from './components/History/History';
import { Login } from './components/Login/Login'



function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
