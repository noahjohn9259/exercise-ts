import { combineReducers, Action, AnyAction, Dispatch } from "redux";
import { columnReducer } from "./columnReducer";
import { tasksReducer } from "./tasksReducer";
import { accountsReducer } from "./accountsReducer";
import { columnOrderReducer } from "./columnOrderReducer";
import {
  TaskReducerState,
  ColumnReducerState,
  AccountsReducerState
} from "./types";

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export interface IApplicationState {
  tasks: TaskReducerState;
  columns: ColumnReducerState;
  columnOrder: string[];
  accounts: AccountsReducerState;
}

export default combineReducers<IApplicationState>({
  tasks: tasksReducer,
  columns: columnReducer,
  accounts: accountsReducer,
  columnOrder: columnOrderReducer
});
