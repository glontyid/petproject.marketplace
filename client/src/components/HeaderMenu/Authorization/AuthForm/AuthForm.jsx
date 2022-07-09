import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ login, handleClose }) => {
  const [form, setForm] = useState({ email: '', password: '', admin: false });
  const hasLogin = form.email.length;
  const hasPassword = form.password.length;
  const inputHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
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
          handleClose();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
      </div>
    </form>
  );
};

export default AuthForm;
