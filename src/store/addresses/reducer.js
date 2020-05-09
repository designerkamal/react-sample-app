import { createReducer } from "../../lib/utils";
import {
  GET_ADDRESSES,
  GET_ADDRESSES_SUCCESS,
  GET_ADDRESSES_ERROR,
} from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  customerId: "",
  customer: null,
  addresses: [],
};

const addressesReducer = createReducer(initialState, {
  [GET_ADDRESSES]: (state, { customerId }) => {
    return {
      ...state,
      isLoading: true,
      isError: false,
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
      isError: true,
      customer: null,
      addresses: [],
    };
  },
});

export default addressesReducer;
