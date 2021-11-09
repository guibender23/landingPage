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
              src='images/coming.jpg'
              day='02 | Nov'
              text1="Unpacking"
            />
            <Calendar
              src='images/coming.jpg'
              day='02 | Nov'
              text1="Unpacking"
            />
            <Calendar
              src='images/coming.jpg'
              day='02 | Nov'
              text1="Unpacking"
            />
            <Calendar
              src='images/coming.jpg'
              day='02 | Nov'
              text1="Unpacking"
            />
            <Calendar
              src='images/coming.jpg'
              day='02 | Nov'
              text1="Unpacking"
            />
            <Calendar
              src='images/coming.jpg'
              day='02 | Nov'
              text1="Unpacking"
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;