export const BASE_URL = "https://customers-api-demo.herokuapp.com";

export const Endpoints = {
  getCustomers: () => `${BASE_URL}/customers`,
  getAddresses: (customerId) => `${BASE_URL}/customers/${customerId}`,
};
