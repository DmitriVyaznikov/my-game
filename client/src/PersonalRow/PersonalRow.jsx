import React from "react";
import Box from "@mui/material/Box";
import styles from "./PersonalRow.module.css";

export function PersonalRow(props) {
  const { game } = props;

  return (
    <Box className={styles.rowBox}>
      <Box className={styles.username}>{game.username}</Box>

      {Object.entries(game.games).map(([key, value]) => (
        <Box key={key} className={styles.pointsrow}>
          <Box>
            <Box>Game №{key}</Box>
            <Box>points: {value}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
