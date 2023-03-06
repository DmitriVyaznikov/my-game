import ATypes from "./types";

const initialState = {
  topics: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ATypes.SET_TOPICS:
      return {
        ...state,
        topics: action.payload.topics,
      };

    default:
      return state; // возвращаем зн-я в память. return - записывает новые значения в стор (храниться все в памяти память)
  }
};
