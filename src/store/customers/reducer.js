import { createReducer } from "../../lib/utils";
import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
} from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  customers: [],
};

const customerReducer = createReducer(initialState, {
  [GET_CUSTOMERS]: (state) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
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
      isError: true,
      customers: [],
    };
  },
});

export default customerReducer;
