import { ActionTypes } from "../actions/types";
import { Reducer } from "redux";
import { ColumnReducerState } from "./types";

const initialState: ColumnReducerState = {};

const reducer: Reducer<ColumnReducerState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SAME_COLUMN:
      const { columnId, tasksIds } = action.payload;
      return {
        ...state,
        [columnId]: { ...state[columnId], tasksIds }
      };

    case ActionTypes.CHANGE_DIFF_COLUMN:
      const { newStart, newFinish } = action.payload;
      return {
        ...state,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      };

    case ActionTypes.ADD_INITIAL_TASKS:
      return {
        ...state,
        "column-1": {
          ...state["column-1"],
          tasksIds: [...action.payload]
        }
      };
    case ActionTypes.UPDATE_INITIAL_TASKS:
      return {
        ...state,
        "column-1": {
          ...state["column-1"],
          tasksIds: [...state["column-1"].tasksIds, action.payload]
        }
      };
    default:
      return state;
  }
};

export { reducer as columnReducer };
