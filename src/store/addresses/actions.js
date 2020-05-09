import {
  GET_ADDRESSES,
  GET_ADDRESSES_SUCCESS,
  GET_ADDRESSES_ERROR,
} from "./actionTypes";

import { Endpoints } from "../../config/urls";

export function getCustomerAddresses(customerId) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_ADDRESSES,
      customerId: customerId,
    });
    fetch(Endpoints.getAddresses(customerId))
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        const { addresses, ...customer } = result.customer;
        dispatch({
          type: GET_ADDRESSES_SUCCESS,
          customer: customer,
          addresses: addresses,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ADDRESSES_ERROR,
        });
      });
  };
}
