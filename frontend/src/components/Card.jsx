import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__button ${isLiked && 'element__button_active'}`
  );
  const handleClick = () => {
    onCardClick(card);
  };
  const handleDeleteClick = () => {
    onCardDelete(card);
  };
  const handleLikeClick = () => {
    onCardLike(card);
  };

  return (
    <article className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__rectangle">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="лайк"></button>
          <span className="element__counter">{card.likes.length}</span>
        </div>
      </div>
      {isOwn && <button className="element__button_action_del" aria-label="удалить карточку" onClick={handleDeleteClick} />}
    </article>
  )
}

export default Card;
