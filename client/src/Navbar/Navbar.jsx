import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ModalWin from '../Modal/ModalWin';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import style from './style.module.css';
import { logout } from '../store/actions';

const CustomNavbar = styled(AppBar)({
    backgroundColor: '#2196f3', // your custom background color
});

const CustomButton = styled(Button)({
    color: 'white', // your custom text color
});

const Navbar = (props) => {
  const userName = useSelector((store) => store.user.username);
  console.log('State UserName', userName);

  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [signUpModal, setSignUpModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const [questionModal, setQuestionModal] = useState(false);

  const handleModal = (event) => {
    if (event.target.id === 'signin') setSignInModal(true);
    if (event.target.id === 'signup') setSignUpModal(true);
  };

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(!!userName);
    }, [userName]);

  console.log('ChangedIsAuth', isAuth);

  const onLogout = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/signout', {
        credentials: 'include',
      });
      const result = await response.json();
      localStorage.clear();
      dispatch(
        logout({
          userId: null,
          username: null,
        })
      );
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
              <Typography
                className={style.helloUser}
                sx={{ flexGrow: 2 }}
                color="inherit"
              >
                Hello, {userName}
              </Typography>
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
                                onClick={() => {
                                    navigate('/personal');
                                }}
                                color="inherit"
                            >
                                Profile
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
                questionModal={questionModal}
                setSignUpModal={setSignUpModal}
                setSignInModal={setSignInModal}
                setQuestionModal={setQuestionModal}
            />
        </>
    );
};

export default Navbar;
