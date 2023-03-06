import React from 'react';
import {Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login(props) {
    return (
        <><Typography variant="h6" id="login-modal-title" gutterBottom>
            Вход
        </Typography>
            <Typography variant="body1" id="login-modal-description" gutterBottom>
                Введите имя пользователя и пароль
            </Typography>
            <form onSubmit={props.handleSubmit}>
                <TextField
                    id="login-username"
                    label="Имя пользователя"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                />
                <TextField
                    id="login-password"
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                />
                <Button variant="contained" type="submit" fullWidth>
                    Войти
                </Button>
            </form>
        </>
    );
}

export default Login;
