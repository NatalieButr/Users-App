import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render() {
    const {songs} = this.props;
    if(songs && songs.length>0){
      }
    
    return (
      <React.Fragment>
        <Link to="/login" className="btn btn-dark">
          LOG IN 
        </Link>
        <Link to="/register" className="btn btn-danger">
          SING UP
        </Link>
      </React.Fragment>
    );
  }
}

export default HomePage;
