import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home'
import  GetStarted from './components/GetStarted/GetStarted'
import { History } from './components/History/History';
import { Login } from './pages/Login/Login';
import Signup from './pages/Signup';
import SelectMovie from './pages/SelectMovie/SelectMovie.js';
import {Search} from './components/Yelp/Search/Search';
import SelectDrink from './pages/SelectDrink/SelectDrink';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/dinner">
              <GetStarted />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/movie">
              <SelectMovie />
            </Route>
            <Route path="/drink">
              <SelectDrink />
            </Route>
          </Switch>
      </Router>
    </ApolloProvider>
  );
}
export default App;