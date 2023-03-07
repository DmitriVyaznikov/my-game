import ATypes from "./types";

const user = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  topics: [],
  user: {
    userId: user.id,
    username: user.login,
    gameId: 1,
  },
  answers: [],
  games: [],
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ATypes.SET_TOPICS:
            return {
                ...state,
                topics: action.payload.topics,
            };
        case ATypes.SET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.payload.user.username,
                    userId: action.payload.user.userId,
                },
            };
        case ATypes.SET_ANSWERS:
            return {
                ...state,
                answers: [...state.answers, action.payload],
            };

    case ATypes.SET_GAMES:
      return {
        ...state,
        games: action.payload.games,
      };

    case ATypes.LOGOUT:
      return {
        ...state,
        user: {
          username: null,
        },
      }; // or return an empty object depending on your state structure

        default:
            return state; // возвращаем зн-я в память. return - записывает новые значения в стор (храниться все в памяти память)
    }
};
