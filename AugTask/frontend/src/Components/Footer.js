import React from 'react';
import Image from '../Assests/mdi_github.png';
import "../Styles/Footer.css"


function Footer() {
  return (
    <div>
      <div className='contact-us'>
        <ul className='list-items'>
          <li><img className='image' src={Image} alt='database' /></li>
        </ul>
      </div>
      <div className='footer'>
        <p>2023 Copyright Raj Reddy Center For Technology And Society All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
