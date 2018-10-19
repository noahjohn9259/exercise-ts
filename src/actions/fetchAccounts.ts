import { ActionTypes } from "./types";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchAccounts = () => (dispatch: Dispatch) => {
  axios
    .get("https://fe-exercise-json-server.herokuapp.com/accounts")
    .then(res =>
      dispatch({
        type: ActionTypes.FETCH_ACCOUNTS,
        payload: res.data
      })
    );
};
