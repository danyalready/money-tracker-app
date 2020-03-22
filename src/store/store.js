import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// Reducers ...
import { userReducers } from "./reducers/userReducers";
import { transactionReducers } from "./reducers/transactionReducers";

const initialState = {};
const middleware = [thunk, logger];

const rootReducers = combineReducers({
  user: userReducers,
  transactions: transactionReducers
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);
const store = createStore(rootReducers, initialState, enhancer);

export default store;
