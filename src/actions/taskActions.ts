import { ActionTypes } from "./types";
import axios from "axios";
import { Dispatch } from "redux";
import { Object } from "core-js";

export const fetchTasks = () => (dispatch: Dispatch) => {
  axios
    .get("https://fe-exercise-json-server.herokuapp.com/tasks")
    .then(res => {
      const { data } = res;

      const reducedResponse = data.reduce((acc: any, taskObj: any) => {
        acc[taskObj.id] = taskObj;
        return acc;
      }, {});
      dispatch({
        type: ActionTypes.FETCH_TASKS,
        payload: reducedResponse
      });
      dispatch({
        type: ActionTypes.ADD_INITIAL_TASKS,
        payload: Object.keys(reducedResponse)
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const postTask = (postData: any) => (dispatch: Dispatch) => {
  axios
    .post("https://fe-exercise-json-server.herokuapp.com/tasks", postData)
    .then(res => {
      const { data } = res;
      console.log("from API, dispatching data here...", data);
      dispatch({
        type: ActionTypes.ADD_TASK,
        payload: data
      });
      dispatch({
        type: ActionTypes.UPDATE_INITIAL_TASKS,
        payload: data.id
      });
    });
};

export const editTaskTitle = (newTitle: string, taskObj: any) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: ActionTypes.EDIT_TASK_TITLE,
    payload: { newTitle, taskObj }
  });
};
