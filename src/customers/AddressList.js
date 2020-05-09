import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerAddresses } from "../store/addresses/actions";
import {
  selectIsLoading,
  selectAddresses,
  selectCustomerDetail,
  selectIsError,
} from "../store/addresses/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function AddressList() {
  let match = useRouteMatch();
  let customerId = match.params.customerId;

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const addresses = useSelector(selectAddresses);
  const customer = useSelector(selectCustomerDetail);

  useEffect(() => {
    dispatch(getCustomerAddresses(customerId));
  }, [customerId, dispatch]);
  return (
    <div className="customer-detail p-4">
      {isLoading && (
        <div className="text-center p-4 text-gray-500">
          <FontAwesomeIcon icon={faCircleNotch} size="2x" spin />
        </div>
      )}
      {
        /** Error State */
        !isLoading && isError && (
          <div className="p-6 text-center text-gray-500 text-xl">
            <h4>Could not load customer information</h4>
          </div>
        )
      }
      {customer && (
        <div className="pb-4 border-b mb-4">
          <h3 className="font-semibold text-2xl">{customer.name}</h3>
          <span className="text-sm text-gray-600">
            {customer.sex}, {customer.age} yrs
          </span>
        </div>
      )}
      {
        /** Empty State */
        !isLoading && !isError && addresses.length === 0 && (
          <div className="p-6 text-center text-gray-500 text-xl">
            <h4>No Addresses Found</h4>
          </div>
        )
      }
      {addresses && addresses.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {addresses.map((address) => (
            <div key={address._id} className="p-4 bg-white shadow-sm text-sm">
              <h5 className="text-black pb-2">{address.title}</h5>
              <p>
                {address.street}
                <br />
                {address.city}
                <br />
                {address.state} - {address.zipCode}
                <br />
                {address.country}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddressList;
