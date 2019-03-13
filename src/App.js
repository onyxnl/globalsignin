import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch,
  Redirect } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import BookList from './page/BookList';
import Category from './page/Category';



class App extends Component { 
  render() {
    return (

      <div className="App">
              <Header/>
              <Switch>
                <Route exact path="/" component={BookList} />
                <Route path="/cat" component={Category} />
              </Switch>
              <Footer/>
      </div> 
    )
    }
  }
 
export default App;
