import { createStore, combineReducers } from "redux";
import results from "./reducers/results";
import currentItems from "./reducers/currentItems";
import suggestions from "./reducers/suggestions";

const reducer = combineReducers({
  results,
  currentItems,
  suggestions
});

const store = createStore(reducer);

export default store;
