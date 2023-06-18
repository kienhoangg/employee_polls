import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { getUsers } from "./users";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function answerQuestion(question) {
  return {
    type: ANSWER_QUESTION,
    question,
  };
}

export function addNewQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question,
  };
}

export function handleAddNewQuestions(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser, questions, users } = getState();
    dispatch(showLoading());

    return _saveQuestion({ optionOneText, optionTwoText, author: authedUser })
      .then((question) => {
        console.log(question);
        dispatch(getQuestions({ ...questions, [question.id]: question }));
        const newListQuestion = [...users[authedUser].questions, question.id];
        const newUser = { ...users[authedUser], questions: newListQuestion };
        dispatch(getUsers({ ...users, [authedUser]: newUser }));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAnswerQuestion(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser, users, questions } = getState();
    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
      usersState: users,
      questionsState: questions,
    })
      .then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
      })
      .then(() => dispatch(hideLoading()));
  };
}
