import React, { useEffect, useRef } from 'react';
import './TitleCard.css';
import cards_data from '../../assets/cards/Cards_data';

const TitleCard = () => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;

    // Check if we have reached the end of the scroll
    if (cardsRef.current.scrollLeft + cardsRef.current.clientWidth >= cardsRef.current.scrollWidth) {
      cardsRef.current.scrollLeft = 0;
    }
    // Check if we have reached the beginning of the scroll
    if (cardsRef.current.scrollLeft === 0 && event.deltaY < 0) {
      cardsRef.current.scrollLeft = cardsRef.current.scrollWidth;
    }
  };

  useEffect(() => {
    const currentCardsRef = cardsRef.current;
    currentCardsRef.addEventListener('wheel', handleWheel);
    return () => {
      currentCardsRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='title-Card'>
      <h2>Popular on Netflix</h2>
      <div className='card-list' ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className='card' key={index}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          );
        })}
        {/* Clone the cards to create the infinite scroll effect */}
        {cards_data.map((card, index) => {
          return (
            <div className='card' key={`clone-${index}`}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
