import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const RegForm = ({ setValue }) => {
  const [form, setForm] = useState({ email: '', password: '', admin: false });
  // const [loginError, setLoginError] = useState(false);
  const hasLogin = form.email;
  const hasPassword = form.password;

  const inputHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // const checkboxHandler = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.checked });
  // };

  const registrationHandler = async () => {
    try {
      await axios
        .post('/api/auth/registration', {
          ...form,
          headers: { contentType: 'application/json' },
        })
        .then((resp) => {
          setValue(0);
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
            onClick={registrationHandler}>
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegForm;
