import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from '../images/logo.svg';

function Header({ email, onSignOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />

      <Routes>
        <Route path="/sign-up" element={<Link className="header__link" to="/sign-in">Войти</Link>}
        />
        <Route path="/sign-in" element={<Link className="header__link" to="/sign-up">Регистрация</Link>}
        />
        <Route
          path="/"
          element={
            <div className="header__user-info">
              <p className="header__user-email">{email}</p>
              <button className="header__button-exit" onClick={onSignOut}>Выйти</button>
            </div>
          }
        />
      </Routes>

    </header>
  )
}

export default Header;
