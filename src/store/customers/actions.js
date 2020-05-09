import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
} from "./actionTypes";

import { Endpoints } from "../../config/urls";

export function getCustomers() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_CUSTOMERS,
    });
    fetch(Endpoints.getCustomers())
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        dispatch({
          type: GET_CUSTOMERS_SUCCESS,
          customers: result.customers,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_CUSTOMERS_ERROR,
        });
      });
  };
}
