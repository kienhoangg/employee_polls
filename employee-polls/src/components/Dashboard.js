import React, { Fragment } from "react";
import { connect } from "react-redux";
import QuestionSection from "./QuestionSection";

const Dashboard = (props) => {
  return (
    <Fragment>
      <div className="container-question">
        <div className="questions-section">
          <QuestionSection
            name={"New Question"}
            lstQuestions={props.questionsUnAnswered}
          />
        </div>
        <div className="done-section">
          <QuestionSection
            name={"Done"}
            lstQuestions={props.questionsAnswered}
          />
        </div>
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
