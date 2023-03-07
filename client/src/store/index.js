import { legacy_createStore as createStore } from "redux"; //npm i redux
import { composeWithDevTools } from "@redux-devtools/extension"; //npm i @redux-devtools/extension
import { reducers } from "./reducers";

const composeEnhancers = composeWithDevTools(); // импорт reduxDevTools

export const store = createStore(reducers, composeEnhancers);
