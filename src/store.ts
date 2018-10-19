import { createStore, applyMiddleware, compose, Store } from "redux";
import rootReducer, { IApplicationState } from "./reducers";
import thunk from "redux-thunk";
// This provides a Redux middleware which connects to our `react-router` instance.
import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from "history";

/*
expected tasks data
    1: {
      id: "1",
      title: "Cook food - TEST",
      accountId: "1"
    },
    2: {
      id: "2",
      title: "Wash the dishes - TEST",
      accountId: "2"
    },
    3: {
      id: "3",
      title: "Do six push-ups - TEST",
      accountId: "1"
    }

*/
// const initialState: IApplicationState = {
//   tasks: {},
//   columns: {
//     "column-1": {
//       id: "column-1",
//       title: "No Status",
//       tasksIds: []
//     },
//     "column-2": {
//       id: "column-2",
//       title: "Ready",
//       tasksIds: []
//     },
//     "column-3": {
//       id: "column-3",
//       title: "In Progress",
//       tasksIds: []
//     },
//     "column-4": {
//       id: "column-4",
//       title: "Completed",
//       tasksIds: []
//     }
//   },
//   //Facilitate reordering of columns
//   columnOrder: ["column-1", "column-2", "column-3", "column-4"],
//   accounts: []
// };

export default function configureStore(
  history: History,
  initialState: IApplicationState
): Store<IApplicationState> {
  const middlewares = [thunk, routerMiddleware(history)];
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
      applyMiddleware(...middlewares)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}
