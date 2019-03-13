import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route , Switch,
    Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BookList from './page/BookList';
import { Reddit } from 'graphqlhub-schemas';
import { GraphQLSchema, graphql } from 'graphql';
// import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
 // networkInterface: createNetworkInterface({
    uri:'https://www.graphqlhub.com/graphql',     
    fetchOptions: {
    mode: 'no-cors',
  }
  //})
 
});
// let schema = new GraphQLSchema({
//     query: Reddit.QueryObjectType
//   });
  
//  let query = '{ subreddit(name: "movies"){newListings(limit: 10) { title score url } } }';

//   graphql(schema, query).then((result) => {
//     console.log(result);
//   });
ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Router>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
