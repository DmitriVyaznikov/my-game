import { light } from "@mui/material/styles/createPalette";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row } from "../Row/Row";
import { setTopics } from "../store/actions";
import { mappedQuestions } from "../Utils/topics";
import styles from "./gameMain.module.css";

export function GameMain() {
  const topics = useSelector((store) => store.topics);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getTopics = async (user) => {
    const response = await fetch(
      `http://localhost:4000/game/${user.userId}/attempt/${user.gameId}`
    );

    const result = await response.json();

    const mappedTopics = mappedQuestions(result);

    // console.log(mappedTopics, '======================');

    dispatch(setTopics(mappedTopics));
  };

  useEffect(() => {
    getTopics(user);
  }, []);

  if (!user.gameId) {
    navigate("/");
  }

  return (
    <>
      <div className={styles.mainBox}>
        {topics.map((topic) => (
          <Row key={topic.id} topic={topic} />
        ))}
      </div>
    </>
  );
}
