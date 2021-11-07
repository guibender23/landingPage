import React from 'react';
import '../App.css';
import { Button } from './Button.jsx';
import './Banner.css';


function Banner() {
  return (
    <div className='banner-container'>
      <video src='/videos/gameclips.mp4' autoPlay loop muted  />
      <h1>NeoGaming</h1>
      <p>Notícias do mundo dos Games</p>
      <div className='banner-button'>
        <Button
          className='button'
          buttonStyle='button-outline'
          buttonSize='button-large'
        >
          Inscreva-se
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