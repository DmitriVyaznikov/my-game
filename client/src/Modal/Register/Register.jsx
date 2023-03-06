import React from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ setSignUpModal }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const onChangeHandle = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
        credentials: 'include',
      });
      const result = await response.json();
      console.log(result);
      if (result.status === 200) {
        localStorage.setItem(
          'user',
          JSON.stringify({ login: result.user.login, id: result.user.id })
        );
        setSignUpModal(false);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Typography
        variant="h6"
        id="login-modal-title"
        gutterBottom
      >
        Регистрация
      </Typography>
      <Typography
        variant="body1"
        id="login-modal-description"
        gutterBottom
      >
        Заполните все поля
      </Typography>
      <form onSubmit={signUp}>
        <TextField
          onChange={onChangeHandle}
          id="login-username"
          label="Имя пользователя"
          variant="outlined"
          margin="normal"
          name="login"
          fullWidth
          required
        />
        <TextField
          onChange={onChangeHandle}
          id="email"
          label="E-mail"
          type="email"
          variant="outlined"
          margin="normal"
          name="email"
          fullWidth
          required
        />
        <TextField
          onChange={onChangeHandle}
          id="login-password"
          label="Пароль"
          type="password"
          variant="outlined"
          margin="normal"
          name="password"
          fullWidth
          required
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
        >
          Зарегистрироваться
        </Button>
      </form>
    </>
  );
}

export default Register;
