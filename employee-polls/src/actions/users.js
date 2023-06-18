export const GET_USERS = "GET_USERS";
export const GET_USERS_WHEN_ANSWER_QUESTION = "GET_USERS_WHEN_ANSWER_QUESTION";
export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function getUsersWhenAnswerQuestion(users) {
  return {
    type: GET_USERS_WHEN_ANSWER_QUESTION,
    users,
  };
}
