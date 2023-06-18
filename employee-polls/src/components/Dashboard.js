import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import QuestionSection from "./QuestionSection";

const Dashboard = (props) => {
  const [isToggle, setIsToggle] = useState("new-question");
  const toggleChange = () => {
    setIsToggle(!isToggle);
  };
  return (
    <Fragment>
      <div className="container-question">
        <div>
          <input
            type="radio"
            value={true}
            name="toggle"
            checked={isToggle}
            onChange={toggleChange}
          />
          <label>New Question </label>
          <input
            type="radio"
            value={false}
            name="toggle"
            onChange={toggleChange}
          />
          <label>Done Question </label>
        </div>
        {isToggle ? (
          <div className="questions-section">
            <QuestionSection
              name={"New Question"}
              lstQuestions={props.questionsUnAnswered}
            />
          </div>
        ) : (
          <div className="done-section">
            <QuestionSection
              name={"Done"}
              lstQuestions={props.questionsAnswered}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ authedUser, questions, users }) => {
  const lstIdAnswers = Object.keys(users[authedUser].answers);
  const lstIdUnAnswers = Object.keys(questions).filter(
    (x) => !lstIdAnswers.includes(x)
  );
  return {
    questionsAnswered: lstIdAnswers.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    questionsUnAnswered: lstIdUnAnswers.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};
export default connect(mapStateToProps)(Dashboard);
