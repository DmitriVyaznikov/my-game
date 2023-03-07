import React from 'react';
import Box from '@mui/material/Box';
import styles from './PersonalRow.module.css';

export function PersonalRow(props) {
  const { game } = props;

  return (
    <Box className={styles.rowBox}>
      <div className={styles.allUsers}>
        <Box className={styles.username}>{game.username}</Box>
      </div>
      <div className={styles.allPoints}>
        {Object.entries(game.games).map(([key, value]) => (
          <Box
            key={key}
            className={styles.pointsrow}
          >
            <Box>
              <Box>Game №{key}</Box>
              <Box>points: {value}</Box>
            </Box>
          </Box>
        ))}
      </div>
    </Box>
  );
}
