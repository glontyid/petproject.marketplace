import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context/auth-context';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [form, setForm] = useState({ email: '', password: '', admin: false });
  const { login, logout } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);
  const hasLogin = form.email;
  const hasPassword = form.password;

  const inputHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const checkboxHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };

  const registrationHandler = async () => {
    try {
      await axios
        .post('/api/auth/registration', {
          ...form,
          headers: { contentType: 'application/json' },
        })
        .then((resp) => {
          console.log(resp);
          // window.location.href = '/login';
        });
    } catch (error) {
      // errorHandler();
      console.log(error);
    }
  };

  return (
    <div>
      <Typography variant="h5" component="h5" margin="dense">
        Регистрация
      </Typography>
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="auth-form__input-wrapper">
          <TextField
            type="text"
            name="email"
            onChange={inputHandler}
            label="Логин"
            variant="outlined"
            margin="dense"
            fullWidth
          />
        </div>
        <div className="auth-form__input-wrapper">
          <TextField
            type="password"
            name="password"
            onChange={inputHandler}
            label="Пароль"
            variant="outlined"
            margin="dense"
            fullWidth
          />
        </div>
        <div className="auth-form__button-wrapper">
          <div className="auth-form__button-wrapper-inner">
            <Button
              type="submit"
              className={hasLogin && hasPassword ? 'enabled' : 'disabled'}
              variant="text"
              margin="normal"
              onClick={registrationHandler}>
              Зарегистрироваться
            </Button>
          </div>
          <Link to="/login">Уже есть аккаунт? Войти</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
