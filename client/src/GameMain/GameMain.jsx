import {light} from '@mui/material/styles/createPalette';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Row} from '../Row/Row';
import {setTopics} from '../store/actions';
import {mappedQuestions} from '../Utils/topics';
import styles from './gameMain.module.css';
import Button from "@mui/material/Button";

export function GameMain({setQuestionModal, setQuestion, addStats}) {
    const topics = useSelector((store) => store.topics);

    const user = useSelector((store) => store.user);


    const dispatch = useDispatch();

    const navigate = useNavigate();


    const getTopics = async (user) => {
        if (!topics.length) {
            const response = await fetch(`/game/${user.userId}/attempt/${user.gameId}`);

            const result = await response.json();

            const mappedTopics = mappedQuestions(result);

            dispatch(setTopics(mappedTopics));
        }
    };

    useEffect(() => {
        getTopics(user);
    }, []);





    // console.log("-> getTopics(user);", getTopics(user));

    if (!user.gameId) {
        navigate('/');
    }

    return (
        <>
            <div className={styles.mainBox}>
                {topics.map((topic) => (
                    <Row
                        setQuestionModal={setQuestionModal}
                        setQuestion={setQuestion}
                        addStats={addStats}
                        key={topic.id}
                        topic={topic}
                    />
                ))}
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    onClick={addStats}
                >
                    Завершить игру
                </Button>
            </div>
        </>
    );
}
