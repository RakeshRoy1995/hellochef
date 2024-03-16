import { combineReducers } from "redux";
import testReducer from "./testReducer";
import PlaceReducer from "./PlaceReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  test:testReducer,
  place: PlaceReducer,
  carts: cartReducer,
});

export default rootReducer;
