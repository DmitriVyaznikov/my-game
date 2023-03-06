import { light } from '@mui/material/styles/createPalette';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from '../Row/Row';
import style from './main.module.css';

function Main() {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={style.main}>
      <h1>СВОЯ ИГРА</h1>
      {userName ? (
        <button
          onClick={() => navigate('/game')}
          className={style.button}
        >
          {' '}
          ИГРАТЬ
          <span></span>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Main;
