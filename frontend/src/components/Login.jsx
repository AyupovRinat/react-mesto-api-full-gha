import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignForm from './SignForm';
import auth from '../utils/authApi.js';

function Login({ onLogin, onEmail }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth.authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setFormValue({ email: '', password: '' });
          onLogin();
          onEmail(formValue.email);
          navigate('/', { replace: true });
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <SignForm
      title='Вход'
      textButton='Войти'
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formValue={formValue}
    />
  );
}

export default Login;

