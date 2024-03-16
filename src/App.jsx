import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
// add further paths once the files are built out
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        {/* add further paths once the files are built out */}
        </div>
    </Router>
  );
}

export default App
