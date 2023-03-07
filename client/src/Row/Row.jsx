import React, {useState} from 'react';
import Box from '@mui/material/Box';
import styles from './Row.module.css';
import {Button} from '@mui/material';

export function Row(props) {
    const {topic} = props;
    const {setQuestionModal} = props;

    const handleModal = async (event) => {
        if (event.target) setQuestionModal(true);
        const response = await fetch(`/game/question/${event.target.id}`)
        console.log("-> response", response);
        const readyQuestion = await response.json()
        props.setQuestion(readyQuestion)
    };

    const statusCard = (elemStatus, elemPoints) => {
        if (elemStatus === null) {
            return elemPoints
        }
        if (elemStatus === true) {
            return 'Success'
        }
        if (elemStatus === false) {
            return 'FAIL'
        }

    }


    return (
        <Box className={styles.rowBox}>
            <Box className={styles.themename}>{topic.name}</Box>

            {topic.questions.map((el) => (

                <Button
                    key={el.id}
                    onClick={handleModal}
                >
                    <Box className={styles.questionsrow} id={el.id}>
                        {statusCard(el.answered, el.points)}
                    </Box>
                </Button>
            ))}
        </Box>
    );
}
