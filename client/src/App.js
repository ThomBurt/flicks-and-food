import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home'
import { GetStarted } from './components/GetStarted/GetStarted'
import { History } from './components/History/History';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup';

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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/getstarted" element={<GetStarted />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
