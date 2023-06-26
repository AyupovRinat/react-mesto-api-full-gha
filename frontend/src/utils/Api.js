import autoprefixer from "autoprefixer";

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._token = null;
  }

  _checkResponce(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  setToken(token) {
    this._token = token;
  };

  getAppinfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }

  //загрузка инфо о пользователе
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    })
      .then(res => this._checkResponce(res));
  }

  //загрузка карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: `Bearer ${this._token}`,
      },
    })
      .then((res) => this._checkResponce(res));
  }
  //редактирование профиля
  editUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${this._token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        about: data.post,
      })
    })

      .then((res) => this._checkResponce(res));
  }
  //редактирование аватара
  editUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${this._token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })

      .then((res) => this._checkResponce(res));
  }
  //добавление новой карточки
  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${this._token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })

      .then((res) => this._checkResponce(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${this._token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponce(res));
  }

  setlike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${this._token}`,
        'Content-Type': 'application/json',
      },
    })

      .then((res) => this._checkResponce(res));
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${this._token}`,
        'Content-Type': 'application/json',
      },
    })

      .then((res) => this._checkResponce(res));
  }
}

export const api = new Api({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'https://api.ayupov.students.nomoreparties.sbs',
  headers: {
    'Content-Type': 'application/json'
  }
})
