import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ModalWin from '../Modal/ModalWin';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CustomNavbar = styled(AppBar)({
  backgroundColor: '#2196f3', // your custom background color
});

const CustomButton = styled(Button)({
  color: 'white', // your custom text color
});

const Navbar = (props) => {
  const userName = useSelector((store) => store.user.username);

  const navigate = useNavigate();

  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const handleModal = (event) => {
    if (event.target.id === 'signin') setSignInModal(true);
    if (event.target.id === 'signup') setSignUpModal(true);
  };

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(!!userName);
  }, [userName]);

  const onLogout = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/signout', {
        credentials: 'include',
      });
      const result = await response.json();
      console.log(result);
      localStorage.clear();
      setIsAuth(false);
      console.log('HEADER', isAuth);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
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
          {isAuth ? (
            <>
              <CustomButton
                id="home"
                onClick={() => {
                  navigate('/');
                }}
                color="inherit"
              >
                Home
              </CustomButton>
              <CustomButton
                id="profile"
                // onClick={handleModal}
                color="inherit"
              >
                Hello, {userName}
              </CustomButton>
              <CustomButton
                id="logout"
                onClick={onLogout}
                color="inherit"
              >
                Выйти
              </CustomButton>
            </>
          ) : (
            <>
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
            </>
          )}
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
