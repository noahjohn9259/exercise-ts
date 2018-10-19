import { ColumnOrderReducerState } from "./types";
import { Reducer } from "redux";

const initialState: ColumnOrderReducerState = [
  "column-1",
  "column-2",
  "column-3",
  "column-4"
];

const reducer: Reducer<ColumnOrderReducerState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { reducer as columnOrderReducer };
