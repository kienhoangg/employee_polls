import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};
const Poll = (props) => {
  const handleClick = (e) => {
    const answer = e.currentTarget.id;
    const { dispatch } = props;
    dispatch(handleAnswerQuestion(answer, props.question.id));
  };

  return (
    <div>
      <h4 className="center">Poll By {props.authedUser.id}</h4>
      <div className="center">
        <img
          src={props.authedUser.avatarURL}
          alt={`Avatar of ${props.authedUser.name}`}
          className="avatar-poll"
        />
      </div>
      <h4 className="center">Would you rather</h4>
      <div className="container">
        <div className="choices">
          <div id="optionOne" className="option-one" onClick={handleClick}>
            <div className="title">{props.question.optionOne.text}</div>
            <div className="button-chose">
              <span>click</span>
            </div>
          </div>
          <div id="optionTwo" className="option-two" onClick={handleClick}>
            <div className="title">{props.question.optionTwo.text}</div>
            <div className="button-chose">
              <span>click</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, questions }, props) => {
  const { id } = props.router.params;
  return {
    id,
    question: questions[id],
    authedUser: users[questions[id].author],
  };
};
export default withRouter(connect(mapStateToProps)(Poll));
