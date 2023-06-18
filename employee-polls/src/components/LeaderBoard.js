import React from "react";
import { connect } from "react-redux";

const LeaderBoard = (props) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className="user-info">
                    <div className="avatar-user">
                      <img className="avatar" src={user.avatarURL} alt="" />
                    </div>
                    <div className="user-name-section">
                      <div className="user-name"> {user.name}</div>
                      <div className="user-id">
                        <span>{user.id}</span>{" "}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.countAnswer}</td>
                <td>{user.countCreated}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const lstUsers = Object.values(users);
  const lstResult = lstUsers.map((user) => {
    const countAnswer = Object.keys(user.answers).length;
    const countCreated = user.questions.length;
    return { ...user, countAnswer, countCreated };
  });
  return {
    users: lstResult.sort((a, b) => (b.countAnswer > a.countAnswer ? 1 : -1)),
  };
};
export default connect(mapStateToProps)(LeaderBoard);
