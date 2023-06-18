import {
  GET_QUESTIONS,
  ANSWER_QUESTION,
  ADD_NEW_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        ...action.questions,
      };

    default:
      return state;
  }
}
