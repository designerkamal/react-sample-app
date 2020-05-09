import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles.css";
import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store";
import Customers from "./customers/Customers";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-700 text-white p-6">
          <h4 className="text-2xl font-bold">Customer Dashboard</h4>
        </header>
        <div className="page-container flex-auto flex">
          <ConnectedRouter history={history}>
            <Switch>
              <Redirect exact from="/" to="/customers" />
              <Route path="/customers">
                <Customers />
              </Route>
            </Switch>
          </ConnectedRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;
