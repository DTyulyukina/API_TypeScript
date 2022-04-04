import {combineReducers} from "redux";

import movie from "./movieReducer";
import filter from "./filterReducer";

const reducer = combineReducers({movie, filter});

export default reducer;
