export function selectCustomerDetail(state) {
  return state.addresses.customer;
}

export function selectAddresses(state) {
  return state.addresses.addresses;
}

export function selectIsLoading(state) {
  return state.addresses.isLoading;
}

export function selectIsError(state) {
  return state.addresses.isError;
}
