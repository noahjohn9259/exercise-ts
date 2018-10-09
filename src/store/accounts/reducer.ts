import { Reducer } from "redux";
import { ISectionState, SectionsActionTypes } from "./types";

const initialState: ISectionState = {
  data: [],
  errors: undefined,
  selected: undefined,
  loading: false
};

const reducer: Reducer<ISectionState> = (state = initialState, action) => {
  switch (action.type) {
    case SectionsActionTypes.FETCH_REQUEST:
    case SectionsActionTypes.SELECT_SECTION: {
      return { ...state, loading: true };
    }
    case SectionsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case SectionsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case SectionsActionTypes.SELECTED: {
      return { ...state, loading: false, selected: action.payload };
    }
    case SectionsActionTypes.CLEAR_SELECTED: {
      return { ...state, selected: undefined };
    }
    default: {
      return state;
    }
  }
};

export { reducer as sectionsReducer };
