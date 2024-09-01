import React from 'react';
import "../Styles/Body.css"

import Image1 from '../Assests/Mask group.png';

function Body() {
  return (
    <div className='body-container'>
      <div className='box1-container'>
        <div className='first-box'></div>
        <div className='first-box'></div>
        <div className='first-box'></div>
      </div>
      <div className='box2-container'>
        <div className='img-header'>
          <p className='box2-matter'><img src={Image1} alt='github'/>About The Data</p>
        </div>
        <div className='box2-container-body'>
          <p className='box2-container-matter'>This is my first React app project...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
