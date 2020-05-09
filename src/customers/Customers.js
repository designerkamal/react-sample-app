import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import { getCustomers } from "../store/customers/actions";
import { selectCustomers } from "../store/customers/selectors";
import { selectIsLoading } from "../store/customers/selectors";

import NavListItem from "./NavListItem";
import AddressList from "./AddressList";

function Customers() {
  let match = useRouteMatch();

  const dispatch = useDispatch();
  const customersList = useSelector(selectCustomers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <div className="flex flex-row w-full">
      <div className="left-pane w-1/4 bg-gray-200">
        <div className="h-full overflow-y-scroll space-y-4 px-2 py-4">
          {isLoading && (
            <div className="text-center p-4 text-gray-500">
              <FontAwesomeIcon icon={faCircleNotch} size="2x" spin />
            </div>
          )}
          {customersList &&
            customersList.map((customer) => (
              <NavListItem
                key={customer._id}
                customer={customer}
                link={`${match.url}/${customer._id}`}
              />
            ))}
        </div>
      </div>
      <div className="main-pane flex-1 bg-gray-100">
        <div class="h-full overflow-y-scroll">
          <Switch>
            <Route path={`${match.path}/:customerId`}>
              <AddressList />
            </Route>
            <Route path={match.path}>
              <div className="w-full h-full flex items-center justify-center">
                <h3>Select a customer to view details</h3>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Customers;
