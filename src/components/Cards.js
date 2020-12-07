import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import cardpic1 from '../images/img-1.jpg';
import cardpic2 from '../images/img-2.jpg';
import cardpic3 from '../images/img-3.jpg';
import cardpic4 from '../images/img-4.jpg';
import cardpic5 from '../images/img-5.jpg';
import cardpic6 from '../images/img-6.jpg';
import cardpic7 from '../images/img-7.jpg';
import cardpic8 from '../images/img-8.jpg';
import cardpic9 from '../images/img-9.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        
                        <CardItem 
                        src={cardpic7}
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path='/https://linkedin.com'
                        />

                        <CardItem 
                        src={cardpic8}
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path='/projects'
                        />

                        
                        <CardItem 
                        src={cardpic2}
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path='/projects'
                        />

                    </ul>

                    <ul className="cards__items">
                        
                        <CardItem 
                        src={cardpic9}
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path='/projects'
                        />

                        <CardItem 
                        src={cardpic3}
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path='/projects'
                        />

                        
                        <CardItem 
                        src={cardpic4}
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path='/projects'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
