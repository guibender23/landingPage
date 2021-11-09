import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Calendar from './Calendar';
function Cards() {

  
  return (
    
    <div className='cards' id="cards-news">
      <br/><br/>
      <h1>Novidade no mundo dos Games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/elden-ring.jpg'
              text='Elden Ring recebe novo trailer promocional'
              label='Aventura'
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
              label='Corrida'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/elderscrolls.jpg'
              text='The Elder Scrolls VI ainda está anos de distância de seu lançamento'
              label='RPG'
              path="/"
            />
            <CardItem
              src='images/gta4.jpg'
              text='Rumor: GTA IV Remaster será lançado em 2023'
              label='Ação'
              path='/'
            />
            <CardItem
              src='images/desconto.jpeg'
              text='Veja aqui os melhores descontos de games na BlackFrday'
              label='Descontos'
              path='/'
            />
          </ul>
        </div>
      </div>
      
      <div id="calendar">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     
        <h1 >Calendário de Lançamentos</h1>
        <div className='cards__container' id="calendar">
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
    </div>
    
  );
}

export default Cards;