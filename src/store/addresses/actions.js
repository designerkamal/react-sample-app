import { Endpoints } from "../../config/urls";

import axios from "axios";

export const GET_ADDRESSES = "GET_ADDRESSES";
export const GET_ADDRESSES_SUCCESS = "GET_ADDRESSES_SUCCESS";
export const GET_ADDRESSES_ERROR = "GET_ADDRESSES_ERROR";

export function getCustomerAddresses(customerId) {
  return function (dispatch, getState) {
    dispatch({
      type: GET_ADDRESSES,
      customerId: customerId,
    });
    axios
      .get(Endpoints.getAddresses(customerId))
      .then((response) => {
        console.log(response);
        if (response.data && response.data.success) {
          return response.data;
        }
        throw new Error("API failed");
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
