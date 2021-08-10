import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import Landing from './Components/Layout/Landing';
import Projects from './Components/Content/Projects'; 
import About from './Components/Content/About';
import Contact from './Components/Content/Contact';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App;
