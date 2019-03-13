import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <Link className="navbar-brand" to="#">Global Sign In</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><Link className="nav-link" to="/">Book Listing</Link></li>
              <li> <Link className="nav-link" to="/cat">Category</Link></li>
            </ul>
          </div>
        </div>
    </nav>
    );
  }

}

export default Header;
