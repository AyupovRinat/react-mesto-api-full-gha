import { useState, useEffect, useContext } from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      post: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm title={'Редактировать профиль'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="info"
      textButton="Сохранить">
      <input type="text" name="name" id="name-field" placeholder="Жак-Ив Кусто" onChange={handleChangeName} value={name || ""}
        className="popup__field popup__field_type_name" minLength="2" maxLength="40" required />
      <span className="popup__field-error name-field-error"></span>
      <input type="text" name="post" id="post-field" placeholder="Исследователь океан" onChange={handleChangeDescription} value={description || ""}
        className="popup__field popup__field_type_post" minLength="2" maxLength="200" required />
      <span className="popup__field-error post-field-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
