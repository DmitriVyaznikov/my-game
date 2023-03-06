import { light } from '@mui/material/styles/createPalette';
import React from 'react';
import { Row } from '../Row/Row';
import styles from './main.module.css';

const topics = [
  {
    id: 1,
    name: 'History',
    questions: [
      {
        id: 1,
        questionText: 'Сколько будет 2+2?',
        points: 200,
        answered: false,
      },
      {
        id: 2,
        questionText: 'Сколько будет 3+2?',
        points: 400,
        answered: false,
      },
      {
        id: 3,
        questionText: 'Сколько будет 4+2?',
        points: 600,
        answered: true,
      },
      {
        id: 4,
        questionText: 'Сколько будет 5+2?',
        points: 1000,
        answered: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Math',
    questions: [
      {
        id: 1,
        questionText: 'Сколько будет 2+2?',
        points: 200,
        answered: true,
      },
      {
        id: 2,
        questionText: 'Сколько будет 3+2?',
        points: 400,
        answered: false,
      },
      {
        id: 3,
        questionText: 'Сколько будет 4+2?',
        points: 600,
        answered: true,
      },
      {
        id: 4,
        questionText: 'Сколько будет 5+2?',
        points: 1000,
        answered: false,
      },
    ],
  },
];

function Main() {
  return (
    <>
      <div className={styles.mainBox}>
        {topics.map((topic) => (
          <Row
            key={topic.id}
            topic={topic}
          />
        ))}
      </div>
    </>
  );
}

export default Main;
