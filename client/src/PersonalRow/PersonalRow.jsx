import React from "react";
import Box from "@mui/material/Box";
import styles from "./PersonalRow.module.css";

export function PersonalRow(props) {
  const { game } = props;

  return (
    <Box className={styles.rowBox}>
      <Box className={styles.username}>{game.name}</Box>

      {game.map((el) => (
        <Box className={styles.pointsrow} key={el.gamePlayed}>{el.totalPoints}</Box>
      ))}
    </Box>
  );
}