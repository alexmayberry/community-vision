import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Projects from './pages/Projects';
// import Project from './pages/Project';
import Brief from './pages/Brief';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import NewBrief from'./pages/NewBrief';
import './pages/pages.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {


  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className="flex-column justify-flex-start min-100-vw"> */}
          <Header />
          {/* </div> */}
          <div className="app_container">
            <Routes>
              <Route 
                path="/"
                element={<Projects />}
              />
              <Route 
                path="/main/:projectId"
                element={<Main />}
              />
              {/* This Brief component will be removed from App.js */}
              <Route 
                path="/brief"
                element={<Brief />}
              />
              {/* This NewBrief component will be removed from App.js */}
              <Route 
                path="/newbrief"
                element={<NewBrief />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/me"
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
            </Routes>
          </div>
        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
