import React from "react";

function PopupWithForm({ name, title, textButton, onClose, children, isOpen, onSubmit }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" aria-label="закрыть" onClick={onClose}></button>
        <form className={`popup__form popup__form_type_${name}`} name={name} onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">{textButton}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
