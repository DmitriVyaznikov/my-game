import ATypes from "./types";

export const setTopics = (topics) => ({
  type: ATypes.SET_TOPICS,
  payload: { topics: topics },
});
