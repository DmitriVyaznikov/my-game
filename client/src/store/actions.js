import ATypes from "./types";

export const setTopics = (topics) => ({
  type: ATypes.SET_TOPICS,
  payload: { topics: topics },
});

export const setUserInfo = (user) => ({
  type: ATypes.SET_USER,
  payload: { user: user },
});