import { combineReducers, Dispatch, Action, AnyAction } from "redux";

// Import your state types and reducers here.

export interface IApplicationState {}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<IApplicationState>({});
