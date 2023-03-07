import ATypes from "./types";

export const setTopics = (topics) => ({
  type: ATypes.SET_TOPICS,
  payload: { topics: topics },
});

export const setUserInfo = (user) => ({
  type: ATypes.SET_USER,
  payload: { user: user },
});

export const setAnswers = (answer) => ({
  type: ATypes.SET_ANSWERS,
  payload: answer,
});

export const setGames = (games) => ({
  type: ATypes.SET_GAMES,
  payload: { games: games },
});

export const logout = () => ({
  type: ATypes.LOGOUT,
});
