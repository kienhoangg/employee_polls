import { _getUsers, _getQuestions } from "../utils/_DATA";
import { setAuthedUser } from "./authedUser";
import { getQuestions } from "./questions";
import { getUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then((result) => {
      const users = result[0];
      const questions = result[1];
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function authenUser(user, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    if (users[user] && users[user].password === password) {
      return dispatch(setAuthedUser(users[user].id));
    }
  };
}
