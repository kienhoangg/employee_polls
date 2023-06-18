import React from "react";
import Question from "./Question";
import { connect } from "react-redux";

const QuestionSection = (props) => {
  return (
    <div className="questions-section">
      <div className="title">
        <span>{props.name}</span>
      </div>
      <div className="question-list">
        {props.lstQuestions.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({}, { name, lstQuestions }) => {
  return {
    lstQuestions,
    name,
  };
};
export default connect(mapStateToProps)(QuestionSection);
