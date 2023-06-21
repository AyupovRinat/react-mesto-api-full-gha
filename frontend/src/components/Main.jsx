import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onCardClick, onEditProfile, onAddPlace, onCardDelete, onCardLike, cards }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={currentUser.avatar} alt="аватар" className="profile__avatar" />
          <button type="button" className="profile__avatar-btn" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="profile__info-button" aria-label="добавить описание" onClick={onEditProfile}></button>
          </div>
          <h2 className="profile__post">{currentUser.about}</h2>
        </div>
        <button type="button" className="profile__add-button" aria-label="добавить" onClick={onAddPlace}></button>
      </section>
      <section className="elements">{cards.map((card) => (
        <Card card={card} key={card._id}
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
          onCardLike={onCardLike} />
      ))}
      </section>
    </main>
  )
}

export default Main;
