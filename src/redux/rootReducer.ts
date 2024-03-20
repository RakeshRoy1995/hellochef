import { combineReducers } from "redux";
import testReducer from "./testReducer";
import PlaceReducer from "./PlaceReducer";
import cartReducer from "./cartReducer";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  test:testReducer,
  place: PlaceReducer,
  carts: cartReducer,
  loading : loadingReducer
});

export default rootReducer;
