const express = require('express');
const routes = require('./controllers');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');


// cors
var cors = require('cors');


const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();



// Cors
app.use(cors());

// const startServer = async () => {
//   // create a new Apollo server and pass in our schema data
//   const server = new ApolloServer({ 
//     typeDefs, 
//     resolvers, 
//     context: authMiddleware,
//   });

  // Start the Apollo server
  //await server.start();

  // integrate our Apollo server with the Express application as middleware
  //server.applyMiddleware({ app });

  // log where we can go to test our GQL API
//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// };

// Initialize the Apollo server
// startServer();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
app.use(routes);




app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});


