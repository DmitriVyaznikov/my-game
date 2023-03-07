import ATypes from "./types";

const user = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
    topics: [],
    user: {
        userId: user.id,
        username: user.login,
        gameId: 1,
    },
    answers: []
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
                answers: {
                    ...state.user,
                    username: action.payload.user.username,
                    userId: action.payload.user.userId,
                },
            };


        default:
            return state; // возвращаем зн-я в память. return - записывает новые значения в стор (храниться все в памяти память)
    }
};
