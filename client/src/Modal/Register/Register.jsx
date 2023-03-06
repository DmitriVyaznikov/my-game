import React from 'react';
import {Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Register(props) {
    return (
        <><Typography variant="h6" id="login-modal-title" gutterBottom>Регистрация
        </Typography>
            <Typography variant="body1" id="login-modal-description" gutterBottom>
                Заполните все поля
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
                    id="email"
                    label="E-mail"
                    type="email"
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
                    Зарегистрироваться
                </Button>
            </form>
        </>
    );
}

export default Register;
