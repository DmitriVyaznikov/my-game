import React, { useState } from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Timer } from './Timer';

export const Question = ({ setQuestionModal }) => {
  const [answer, setAnswer] = useState('');
  const onChangeHandle = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  };
  console.log(answer);
  return (
    <>
      <Typography
        variant="h6"
        id="login-modal-title"
        gutterBottom
      >
        Внимание, вопрос:
      </Typography>
      <Typography
        variant="body1"
        id="login-modal-description"
        gutterBottom
      >
        Сюда подставляем вопросы
      </Typography>
      <form
      // onSubmit={onAnswer}
      >
        <TextField
          onChange={onChangeHandle}
          id="answerField"
          label="Ответ на вопрос:"
          variant="outlined"
          margin="normal"
          name="answer"
          fullWidth
        />
        <div>
          {' '}
          <Timer />
        </div>
        <Button
          variant="contained"
          type="submit"
          fullWidth
        >
          Ответить
        </Button>
      </form>
    </>
  );
};
