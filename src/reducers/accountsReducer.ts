import { ActionTypes } from "../actions/types";
import { Reducer } from "redux";
import { AccountsReducerState } from "./types";

const initialState: AccountsReducerState = [];

const reducer: Reducer<AccountsReducerState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.FETCH_ACCOUNTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export { reducer as accountsReducer };
