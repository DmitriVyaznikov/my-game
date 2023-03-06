import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ModalWin from '../Modal/ModalWin';

const CustomNavbar = styled(AppBar)({
  backgroundColor: '#2196f3', // your custom background color
});

const CustomButton = styled(Button)({
  color: 'white', // your custom text color
});

const Navbar = (props) => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const handleModal = (event) => {
    if (event.target.id === 'signin') setSignInModal(true);
    if (event.target.id === 'signup') setSignUpModal(true);
  };

  return (
    <>
      <CustomNavbar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Своя игра
          </Typography>
          <CustomButton
            id="signin"
            onClick={handleModal}
            color="inherit"
          >
            Вход
          </CustomButton>
          <CustomButton
            id="signup"
            onClick={handleModal}
            color="inherit"
          >
            Регистрация
          </CustomButton>
        </Toolbar>
      </CustomNavbar>
      <ModalWin
        signUpModal={signUpModal}
        signInModal={signInModal}
        setSignUpModal={setSignUpModal}
        setSignInModal={setSignInModal}
      />
    </>
  );
};

export default Navbar;
