import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomNavbar = styled(AppBar)({
    backgroundColor: '#2196f3', // your custom background color
});

const CustomButton = styled(Button)({
    color: 'white', // your custom text color
});

const Navbar = () => {
    return (
        <CustomNavbar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Своя игра
                </Typography>
                <CustomButton color="inherit">Вход</CustomButton>
                <CustomButton color="inherit">Регистрация</CustomButton>
            </Toolbar>
        </CustomNavbar>
    );
};

export default Navbar;
