import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import { removeAuthedUser } from "../actions/authedUser";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    console.log(props);
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
  let navigate = useNavigate();
  useEffect(() => {
    if (!props.question) {
      navigate("/error");
    }
  }, [props.question]);
  return (
    <div>
      <h4 className="center">Poll By {props?.authedUser?.id}</h4>
      <div className="center">
        <img
          src={props?.authedUser?.avatarURL}
          alt={`Avatar of ${props?.authedUser?.name}`}
          className="avatar-poll"
        />
      </div>
      <h4 className="center">Would you rather</h4>
      <div className="container">
        <div className="choices">
          <div id="optionOne" className="option-one" onClick={handleClick}>
            <div className="title">
              {props?.question?.optionOne.text} ({props?.percentageOptionOne}%)
            </div>
            <div className="button-chose">
              <span>click</span>
            </div>
          </div>
          <div id="optionTwo" className="option-two" onClick={handleClick}>
            <div className="title">
              {props?.question?.optionTwo.text} ({props?.percentageOptionTwo}%)
            </div>
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
  const question = questions[id];
  if (!question) {
    return {};
  }
  const totalUsers = Object.keys(users).length;
  const totalOptionOne =
    (questions[id].optionOne.votes.length / totalUsers) * 100;
  const totalOptionTwo =
    (questions[id].optionTwo.votes.length / totalUsers) * 100;

  return {
    id,
    question,
    authedUser: users[questions[id].author],
    percentageOptionOne: totalOptionOne,
    percentageOptionTwo: totalOptionTwo,
  };
};
export default withRouter(connect(mapStateToProps)(Poll));
