import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  import thunk from "redux-thunk";
  import { authReducer } from "./auth.reducer";
  const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const totalReducer = combineReducers({
    authManager: authReducer,
  });
  export const store = legacy_createStore(
    totalReducer,
    composeInhancer(applyMiddleware(thunk))
  );