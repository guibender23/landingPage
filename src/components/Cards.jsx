import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Calendar from './Calendar';

function Cards() {
  return (

    <div className='cards' id="cards-news">
      <br /><br />
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
              text='Veja aqui os melhores descontos de games na Black Friday'
              label='Promoção'
              path='/'
            />
          </ul>
        </div>
      </div>
  
        <div className='cards' id="reviews">
          <br/><br/>
        <h1>Reviews</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/farcry6.jpg'
                text='Jogamos Far Cry 6: Acerto ou erro da Ubisoft?'
                path='/'
              />
              <CardItem
                src='images/back4blood.jpg'
                text='Back 4 Blood: Nostálgico e frenético!'
                path='/'
              />
              </ul>
              <ul className='cards__items'>
              <CardItem
                src='images/riders.jpg'
                text="Riders Republic: Jogo de esporte do ano?"
                path='/'
              />
              <CardItem
                src="images/lstc.png"
                text="Life is Strange: True Colors: Um drama emocionante"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>


      <div id="calendar">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        

        <h1 >Calendário de Lançamentos</h1>
        <div className='cards__container' id="calendar">
          <div className='cards__wrapper'>
            <ul className='cards__items'>

              <Calendar
                src='images/knockcity.png'
                day='02 | Nov'
                text1="Knockout City"
              />

              <Calendar
                src='images/forza5.png'
                day='09 | Nov'
                text1="Forza Horizon 5"

              />

              <Calendar
                src='images/jurassic.png'
                day='09 | Nov'
                text1="Jurassic World Evolution 2"

              />

              <Calendar
                src='images/final_fantasy_v.png'
                day='10 | Nov'
                text1="Final Fantasy V: Pixel Remaster"
              />

              <Calendar
                src='images/gta.png'
                day='11 | Nov'
                text1="Grand Theft Auto: The Trilogy"
              />

              <Calendar
                src='images/bf.png'
                day='19 | Nov'
                text1="Battlefield 2042"
              />

            </ul>

            <ul className='cards__items'>
              <Calendar
                src='images/pokemon.png'
                day='19 | Nov'
                text1="Pokemon Brilliant Diamond"
              />

              <Calendar
                src='images/solarash.png'
                day='02 | Dez'
                text1="Solar Ash"
              />

              <Calendar
                src='images/finalfantasy14.png'
                day='07 | Dez'
                text1="Final Fantasy XIV: Endwalker"
              />

              <Calendar
                src='images/halo.png'
                day='08 | Dez'
                text1="Halo Infinite"
              />

              <Calendar
                src='images/syberia.png'
                day='10 | Dez'
                text1="Syberia: The World Before"
              />

              <Calendar
                src='images/fnaf.png'
                day='16 | Dez'
                text1="Five Nights at Freddy's: Security Breach"
              />

            </ul>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Cards;