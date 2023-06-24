import React from 'react';
import { Link } from 'react-router-dom';

function SignForm({ title, textButton, handleChange, handleSubmit, formValue }) {
  return (
    <section className='signform'>
      <h1 className='signform__title'>{title}</h1>
      <form onSubmit={handleSubmit} className='signform__form'>
        <div className='signform__input'>
          <input className='signform__input-text' id='email' name='email' type='email' value={formValue.email || ""} onChange={handleChange} placeholder='Email' required />
          <input className='signform__input-text' id='password' name='password' type='password' value={formValue.password || ""} onChange={handleChange} placeholder='Пароль' required />
        </div>
        <div>
          <button type='submit' className='signform__button'>
            {textButton}
          </button>
        </div>
          <Link to={title === "Регистрация" ? "/sign-in" : "/sign-up"} className="signform__login-link">
            {title === "Регистрация" ? "Уже зарегистрированы? Войти" : ""}
          </Link>
      </form>
    </section >
  )
}

export default SignForm;
