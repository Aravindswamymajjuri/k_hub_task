import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function Home() {
  return (
    <div className='container'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
