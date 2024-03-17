import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
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
        <Route exact path='/resume' component={Resume} />
        <Footer />
        {/* add further paths once the files are built out */}
        </div>
    </Router>
  );
}

export default App
