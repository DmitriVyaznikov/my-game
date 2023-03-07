import React, { useState } from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Timer } from './Timer';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswers, setTopics } from '../../store/actions';
import { useParams } from 'react-router-dom';
import style from './style.module.css';

export const Question = ({ question }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState('');
  const user = useSelector((store) => store.user);

  const topics = useSelector((state) => state.topics);
  const answersUser = useSelector((state) => state.answers);
  const onChangeHandle = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  };
  const createAnswer = (answered) => {
    const answer = {
      userId: user.userId,
      gameId: user.gameId,
      correctQuestion: answered,
      questionId: question.id,
    };
    return answer;
  };

  const onAnswer = (event) => {
    event.preventDefault();
    let answered;

    if (answer.answer === question.answer) {
      // console.log("-> WIN");
      answered = true;
      createAnswer(answered);

      dispatch(setAnswers(createAnswer(answered)));
    }
    if (answer.answer !== question.answer) {
      answered = false;
      createAnswer(answered);
      dispatch(setAnswers(createAnswer(answered)));
    }

    const updatedTopics = topics.map((topic) => {
      const updatedQuestions = topic.questions.map((elem) => {
        if (elem.id === question.id) {
          return {
            ...elem,
            answered: answered,
          };
        } else {
          return elem;
        }
      });

      return {
        ...topic,
        questions: updatedQuestions,
      };
    });

    dispatch(setTopics(updatedTopics));
  };

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
        {question.questionText}
      </Typography>
      <form onSubmit={onAnswer}>
        <TextField
          onChange={onChangeHandle}
          id="answerField"
          label="Ответ на вопрос"
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
          className={style.answerButton}
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
