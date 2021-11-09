import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Calendar from './Calendar';
function Cards() {

  
  return (
    <div className='cards'>
      <h1>Novidade no mundo dos Games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/elden-ring.jpg'
              text='Elden Ring recebe novo trailer promocional'
              label='Adventure'
              path="/"
            />
            <CardItem
              src='images/cod.jpg'
              text='Lançamento Mundial: Call of Duty - Vanguard'
              label='FPS'
              path='/'
            />
            <CardItem
              src='images/forza5.jpg'
              text='Forza Horizon 5 entra em Early Access no Xbox'
              label='Race'
              path='/'
            />
          </ul>
        </div>
      </div>

      <h1>Calendiario de Lançamentos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Calendar
              src='images/forza_horizon_5.jpg'
              day='09 | Nov'
              text1="Forza Horizon 5"
            />
            <Calendar
              src='images/final_fantasy_v.jpg'
              day='10 | Nov'
              text1="Final Fantasy V:Pixel Remaster"
            />
            <Calendar
              src='images/gta.jpg'
              day='11 | Nov'
              text1="Grand Theft Auto: The Trilogy"
            />
            <Calendar
              src='images/bf.jpg'
              day='19 | Nov'
              text1="Battlefield 2042"
            />
            <Calendar
              src='images/pokemon.jpg'
              day='19 | Nov'
              text1="Pokemon Brilliant Diamond"
            />
            <Calendar
              src='images/halo.jpg'
              day='08 | Dez'
              text1="Halo Infinite"
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;