import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm title={'Новое место'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="card-add"
      textButton="Сохранить">
      <input type="text" name="name" id="cardName-field" placeholder="Название" value={name} onChange={handleChangeName}
        className="popup__field popup__field_type_place" minLength="2" maxLength="30" required />
      <span className="popup__field-error cardName-field-error"></span>
      <input type="url" name="link" id="link-field" placeholder="Ссылка на картинку" value={link} onChange={handleChangeLink}
        className="popup__field popup__field_type_link" required />
      <span className="popup__field-error link-field-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
