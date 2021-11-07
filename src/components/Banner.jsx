import React from 'react';
import '../App.css';
import { Button } from './Button.jsx';
import './Banner.css';


function Banner() {
  return (
    <div className='banner-container'>
      <img src='/images/teste.jpg'  />
      <h1>Teste</h1>
      <p>Teste texto</p>
      <div className='banner-button'>
        <Button
          className='button'
          buttonStyle='button-outline'
          buttonSize='button-large'
        >
          GET STARTED
        </Button>
        <Button
          className='button'
          buttonStyle='button-primary'
          buttonSize='button-large'
          
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        
      </div>
      
    </div>
  );
}

export default Banner;