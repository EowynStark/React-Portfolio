import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// add further paths once the files are built out
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Header />
        <Route exact path='/' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        {/* add further paths once the files are built out */}
        </div>
    </Router>
  );
}

export default App
