import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login({ setSignInModal }) {
  const [user, setUser] = useState({});
  const onChangeHandle = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      console.log(user);
      const response = await fetch('http://localhost:4000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
        credentials: 'include',
      });
      const result = await response.json();
      if (result.status === 200) {
        localStorage.setItem(
          'user',
          JSON.stringify({ login: result.reqUser.name, id: result.reqUser.id })
        );
        setSignInModal(false);
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
        Вход
      </Typography>
      <Typography
        variant="body1"
        id="login-modal-description"
        gutterBottom
      >
        Введите имя пользователя и пароль
      </Typography>
      <form onSubmit={signIn}>
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
          Войти
        </Button>
      </form>
    </>
  );
}

export default Login;
