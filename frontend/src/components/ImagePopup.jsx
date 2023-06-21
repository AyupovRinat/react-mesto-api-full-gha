import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_big-image ${card.name ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <button type="button" className="popup__close-button popup__close-button_type_image" onClick={onClose} aria-label="закрыть">
        </button>
        <figure className="popup__figure">
          <img src={card.link} className="popup__image" alt={card.name} />
          <figcaption className="popup__image-caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
