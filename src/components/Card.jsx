import React from "react";

function Card(props) {
   const handleClick = () => {
     props.onCardClick(props.card);
   }

  return (
    <div className="element-template">
      <li className="element" key={props.card._id}>
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
        />
        <button
          className="element__button-delete"
          type="button"
          aria-label="Корзина"
        ></button>
        <div className="element__text-block">
          <h2 className="element__title">{props.card.name}</h2>
          <div>
            <button
              className="element__button-like"
              type="button"
              aria-label="Лайк"
            ></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;
