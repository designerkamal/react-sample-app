import { Endpoints } from "../../config/urls";

import axios from "axios";

export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const GET_CUSTOMERS_SUCCESS = "GET_CUSTOMERS_SUCCESS";
export const GET_CUSTOMERS_ERROR = "GET_CUSTOMERS_ERROR";

export function getCustomers() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_CUSTOMERS,
    });
    axios
      .get(Endpoints.getCustomers())
      .then((response) => {
        if (response.data && response.data.success) {
          return response.data;
        }
        throw new Error("API failed");
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
