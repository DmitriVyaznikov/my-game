import { light } from "@mui/material/styles/createPalette";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "../Row/Row";
import { setTopics } from "../store/actions";
import styles from "./main.module.css";

function Main() {
  const topics = useSelector((store) => store.topics);

  const dispatch = useDispatch();

  const getTopics = async () => {
    const response = await fetch(`http://localhost:3002/topics`);

    const result = await response.json();

    dispatch(setTopics(result));
  };

  useEffect(() => {
    getTopics();
  }, []);

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
