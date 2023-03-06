import React from "react";
import Box from "@mui/material/Box";
import styles from "./Row.module.css";

export function Row(props) {
  const { topic } = props;

  return (
    <Box className={styles.rowBox}>
      <Box className={styles.themename}>{topic.name}</Box>

      {topic.questions.map((el) => (
        <Box className={styles.themename} key={el.id}>{!el.answered ? el.points : "Answered"}</Box>
      ))}
    </Box>
  );
}
