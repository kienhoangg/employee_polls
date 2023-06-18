import React, { Fragment, useState } from "react";
import { handleAddNewQuestions } from "../actions/questions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const New = (props) => {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleOptionOne = (e) => {
    setOptionOne(e.target.value);
  };
  const handleOptionTwo = (e) => {
    setOptionTwo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleAddNewQuestions(optionOne, optionTwo));
    navigate("/");
  };
  return (
    <Fragment>
      <h2 className="center">Would You Rather</h2>
      <h3 className="center sub-title">Create Your Own Poll</h3>
      <form onSubmit={handleSubmit}>
        <div className="first-option">
          <span>First Option</span>
          <input
            type="text"
            name="optionOne"
            className="btnOptionOne"
            placeholder="Option One"
            value={optionOne}
            onChange={handleOptionOne}
          />
        </div>
        <div className="second-option">
          <span>Second Option</span>
          <input
            type="text"
            name="optionTwo"
            className="btnOptionTwo"
            placeholder="Option Two"
            value={optionTwo}
            onChange={handleOptionTwo}
          />
        </div>
        <div className="btnAddNewPoll">
          <button
            className="btn "
            type="submit"
            disabled={optionTwo === "" || optionOne === ""}
          >
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default connect()(New);
