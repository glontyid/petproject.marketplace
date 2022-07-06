import { Button, TextField, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context/auth-context';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Authorization = ({ onClose }) => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '', admin: false });
  const hasLogin = form.email;
  const hasPassword = form.password;

  const inputHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const checkboxHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };

  const loginHandler = async () => {
    try {
      await axios
        .post('/api/auth/login', {
          ...form,
          headers: { contentType: 'application/json' },
        })
        .then((resp) => {
          login(resp.data.token, resp.data.userId, resp.data.isAdmin);
          document.location.href = '/';
        });
    } catch (error) {
      console.log(error);
      // errorHandler();
    }
  };

  return (
    <div>
      <Typography variant="h5" component="h5" margin="dense">
        Авторизация
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
              onClick={loginHandler}>
              Войти
            </Button>
          </div>
          <Link to="/registration">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
};

export default Authorization;
