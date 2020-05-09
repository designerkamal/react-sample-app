import { createReducer } from "../../lib/utils";
import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  customers: [],
};

const customerReducer = createReducer(initialState, {
  [GET_CUSTOMERS]: (state) => {
    return {
      ...state,
      isLoading: true,
      customers: [],
    };
  },
  [GET_CUSTOMERS_SUCCESS]: (state, { customers }) => {
    return {
      ...state,
      isLoading: false,
      customers: customers,
    };
  },
  [GET_CUSTOMERS_ERROR]: (state) => {
    return {
      ...state,
      isLoading: false,
      customers: [],
    };
  },
});

export default customerReducer;
