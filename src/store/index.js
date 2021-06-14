import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
