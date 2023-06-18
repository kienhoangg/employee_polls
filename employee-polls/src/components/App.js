import React from "react";
import { useEffect, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { connect } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import LeaderBoard from "./LeaderBoard";
import Poll from "./Poll";
import New from "./New";
import ErrorPage from "./ErrorPage";
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <h3 className="center">Employee Polls</h3>
      {console.log(window.location.pathname)}
      {!props.authedUser ? (
        <Login />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" exact element={<LeaderBoard />} />
            <Route path="/question/:id" element={<Poll />} />
            <Route path="/new" exact element={<New />} />
            <Route path="/error" exact element={<ErrorPage />} />
          </Routes>
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
  authedUser,
});
export default connect(mapStateToProps)(App);
