import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { initialImages } from '../../constantes/Images';
import './Cards.css';

function Cards({ search, images }) {
  const [cards, setCards] = useState(images);

  const history = useHistory();

  useEffect(() => {
    const filterImage = images.filter((obj) => (obj.title.toLowerCase().includes(search)));
    if (filterImage.length !== 0) setCards(filterImage);
    else setCards(initialImages);
  }, [search]);

  return (
    <div className="cardContainer">
      {
        cards.map((card) => (
          <button key={card.key} type="button" className="cardButton" onClick={() => (history.push(card.key))}>
            <div className="divCardImage">
              <img src={card.cards} alt={card.key} className="cardImage" />
            </div>
            <div className="cardTitle">
              {card.title}
            </div>
            <div className="cardSubtitleContainer">
              <hr className="cardSubtitleLine" />
              <div className="cardSubtitle">
                {card.subtitle}
              </div>
              <hr className="cardSubtitleLine" />
            </div>
          </button>
        ))
      }
    </div>
  );
}

export default Cards;
