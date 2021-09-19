import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer";
import searchReducer from "./searchReducer";


const reducers = combineReducers({
    favourites: favouritesReducer,
    search: searchReducer,
});
console.log(reducers)
export default reducers;