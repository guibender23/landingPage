import React from 'react';


function Calendar(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='cards__day__calendar'>{props.day}</h5>
            <h5 className='cards__item__text__calendar'>{props.text1}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default Calendar;