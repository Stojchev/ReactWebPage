import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
export default function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='card__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src={require('../images/image1.jpg')} 
            text="Explore the hidden city hidden deep in the world"
            label='Adventure'
            path='/services'
            ></CardItem>
             <CardItem 
            src={require('../images/image2.jpg')} 
            text="Explore the lights of the "
            label='Luxury'
            path='/services'
            ></CardItem>
          </ul>
          <ul className='cards__items'>
          <CardItem 
            src={require('../images/image3.jpg')} 
            text="Explore the cloudy forest hidden in North America"
            label='Adventure'
            path='/services'
            ></CardItem>
             <CardItem 
            src={require('../images/image5.jpg')} 
            text="Explore the lights of the city "
            label='Luxury'
            path='/services'
            ></CardItem>
            <CardItem 
            src={require('../images/image6.jpg')} 
            text="Explore the mountains of Zimbabwe"
            label='Luxury'
            path='/services'
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}
