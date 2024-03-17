import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='p-3 mb-2 bg-warning text-dark'>
        <Navigation>
        <Header>
          <main className='mx-auto'>
            <Outlet />
          </main>
        </Header>
        </Navigation>
        <Footer />
  
    </div>
  );
}

export default App
