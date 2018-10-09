import axios from "axios";
import { Dispatch } from "redux";
import { SectionsActionTypes } from "./types";

export function fetchRequest() {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SectionsActionTypes.FETCH_REQUEST
    });
    try {
      const res = await axios.get(`/accounts`);
      dispatch({
        type: SectionsActionTypes.FETCH_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SectionsActionTypes.FETCH_ERROR
      });
    }
  };
}
