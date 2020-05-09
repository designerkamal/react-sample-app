import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import customerReducer from "./customers/reducer";
import addressesReducer from "./addresses/reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    customers: customerReducer,
    addresses: addressesReducer,
  });

export default createRootReducer;
