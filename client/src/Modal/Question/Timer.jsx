import React, { useEffect, useState } from 'react';
import style from './style.module.css';

export const Timer = () => {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    let counter;
    if (timer > 0) {
      counter = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    // if (timer === 0) {
    //   const response =
    // }
    return () => clearInterval(counter);
  }, [timer]);

  return (
    <div className={style.timer}>
      {timer ? (
        <span>Время на ответ 00:{timer >= 10 ? timer : '0' + timer}</span>
      ) : (
        <span>Время вышло!</span>
      )}
    </div>
  );
};
