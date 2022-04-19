import filter from "./filter";
import { combineReducers } from "redux";;

const rootReducer = combineReducers({
    filter,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;