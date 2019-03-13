import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";



  const BookList = () => (
    <Query
      query={gql`
        {
            newListings {
                title
                comments
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.newListings.map(({ title, comments }) => (
          <div >
            <p>{`${title} by ${comments}`}</p>
          </div>
        ));
      }}
    </Query>
  );

   export default BookList;

