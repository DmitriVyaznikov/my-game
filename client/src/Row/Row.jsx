import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styles from './Row.module.css';
import { Button } from '@mui/material';

export function Row(props) {
  const { topic } = props;
  const { setQuestionModal } = props;

  const handleModal = (event) => {
    if (event.target) setQuestionModal(true);
  };

  return (
    <Box className={styles.rowBox}>
      <Box className={styles.themename}>{topic.name}</Box>

      {topic.questions.map((el) => (
        <Button
          key={el.id}
          onClick={handleModal}
        >
          <Box className={styles.questionsrow}>
            {!el.answered ? el.points : 'Answered'}
          </Box>
        </Button>
      ))}
    </Box>
  );
}
