import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";

export const history = createBrowserHistory();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history))
    )
  );

  return store;
}
