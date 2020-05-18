import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { disputeReducer } from "./disputes/reducer";
import { IDisputeListState, DisputeTypes } from "./disputes/types";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./disputes/sagas";

//for mapStateProps
export interface IReduxState {
  dispute: IDisputeListState;
}

//for mapDispatchProps
export interface IDispatchProps {
  fetchDispute: (url: string) => DisputeTypes;
  fetchDisputeMore: (url: string) => DisputeTypes;
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  dispute: disputeReducer,
});

function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
