import { createReducer } from "../../lib/utils";
import {
  GET_ADDRESSES,
  GET_ADDRESSES_SUCCESS,
  GET_ADDRESSES_ERROR,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  customerId: "",
  customer: null,
  addresses: [],
};

const addressesReducer = createReducer(initialState, {
  [GET_ADDRESSES]: (state, { customerId }) => {
    return {
      ...state,
      isLoading: true,
      customerId,
      customer: null,
      addresses: [],
    };
  },
  [GET_ADDRESSES_SUCCESS]: (state, { addresses, customer }) => {
    return {
      ...state,
      isLoading: false,
      customer,
      addresses,
    };
  },
  [GET_ADDRESSES_ERROR]: (state) => {
    return {
      ...state,
      isLoading: false,
      customer: null,
      addresses: [],
    };
  },
});

export default addressesReducer;
