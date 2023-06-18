import React from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";
const Question = (props) => {
  const { author, timestamp, id } = props.question;
  return (
    <div className="question">
      <div className="question-info">
        <span>{author}</span>
        <div>{formatDate(timestamp)}</div>
      </div>
      <Link to={`/question/${id}`}>
        <div className="btn">show</div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: question ?? null,
  };
};
export default connect(mapStateToProps)(Question);
