import React, { useEffect, useRef, useState } from 'react';
import './TitleCard.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCard = ({ title, category }) => {
  const [apiDate, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDRlNTAxZGNiNjdlOTAyNTlmNTE1MzMxZTUzNzBjNCIsIm5iZiI6MTcyMTYzNTY3OS4wNjU2NSwic3ViIjoiNjY5ZTExOGFhZTFiZmQyZWMxNGJlN2M4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.pI6ZlvuQ15Kelz4t8nywxZ3ZXimMsM-vI4L78_LkuHI'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;

    if (cardsRef.current.scrollLeft + cardsRef.current.clientWidth >= cardsRef.current.scrollWidth) {
      cardsRef.current.scrollLeft = 0;
    }
    if (cardsRef.current.scrollLeft === 0 && event.deltaY < 0) {
      cardsRef.current.scrollLeft = cardsRef.current.scrollWidth;
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    const currentCardsRef = cardsRef.current;
    currentCardsRef.addEventListener('wheel', handleWheel);
    return () => {
      currentCardsRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='title-Card'>
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiDate.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.name} />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
