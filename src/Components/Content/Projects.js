import React, { Component } from 'react';
import Thumbnail from '../Layout/Thumbnail';
import '../../App.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <Thumbnail
          link=""
          image=""
          title="test"
          category="test"
        /> 
        <Thumbnail
          link=""
          image=""
          title="test"
          category="test"
        />  
      </div>
    )
  }
}

export default Projects
