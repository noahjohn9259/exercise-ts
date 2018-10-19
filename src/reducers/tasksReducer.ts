import { ActionTypes } from "../actions/types";
import { Reducer } from "redux";
import { TaskReducerState } from "./types";

const initialState: TaskReducerState = {};

const reducer: Reducer<TaskReducerState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASKS:
      return {
        ...state,
        ...action.payload
      };

    case ActionTypes.ADD_TASK:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    case ActionTypes.EDIT_TASK_TITLE:
      const { taskObj, newTitle } = action.payload;
      return {
        ...state,
        [taskObj.id]: {
          ...taskObj,
          title: newTitle
        }
      };

    default:
      return state;
  }
};

export { reducer as tasksReducer };
