import { ActionTypes } from "./types";
import { Dispatch } from "redux";

export const changeInSameColumnAction = (
  tasksIds: string[],
  columnId: string
) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.CHANGE_SAME_COLUMN,
    payload: { tasksIds, columnId }
  });
};

export const changeColumnAction = (newStart: any, newFinish: any) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: ActionTypes.CHANGE_DIFF_COLUMN,
    payload: { newStart, newFinish }
  });
};
