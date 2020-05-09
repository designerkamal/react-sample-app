export function selectCustomers(state) {
  return state.customers.customers;
}

export function selectIsLoading(state) {
  return state.customers.isLoading;
}

export function selectIsError(state) {
  return state.customers.isError;
}
