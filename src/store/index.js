import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../reducers";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import constants from "../constants";

const loadfromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem(constants.TODO_APP_STATE);
    if (serialisedState === null) return undefined;
    console.log(serialisedState);
    return JSON.parse(serialisedState);
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    console.log(state);
    localStorage.setItem(constants.TODO_APP_STATE, JSON.stringify(state));
  } catch (err) {
    console.warn(err);
  }
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    loadfromLocalStorage(),
    applyMiddleware(logger, sagaMiddleware)
  );
  store.subscribe(() => saveToLocalStorage(store.getState()));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
