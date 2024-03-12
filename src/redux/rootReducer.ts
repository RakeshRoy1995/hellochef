import { combineReducers } from "redux";
import testReducer from "./testReducer";
import PlaceReducer from "./PlaceReducer";

const rootReducer = combineReducers({
  test:testReducer,
  place: PlaceReducer
});

export default rootReducer;
