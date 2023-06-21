import React from 'react';
import badIcon from '../images/badimage.svg';
import goodIcon from '../images/goodimage.svg';

function InfoToolTip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        {isSuccess ? (
          <>
            <img className="popup__infotooltip-icon" src={`${goodIcon}`} alt='успешная регистрация' />
            <p className="popup__infotooltip-text">Вы успешно зарегистрировались!</p>
          </>
        ) : (
          <>
            <img className='popup__infotooltip-icon' src={`${badIcon}`} alt='не удалось зарегистрироваться' />
            <p className='popup__infotooltip-text'>Что-то пошло не так! Попробуйте ещё раз.</p>
          </>
        )}
        <button type='button' className='popup__close-button' aria-label='закрыть' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoToolTip;

