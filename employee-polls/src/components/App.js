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
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <h3 className="center">Employee Polls</h3>

      {!props.authedUser ? (
        <Login />
      ) : (
        <div>
          {" "}
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" exact element={<LeaderBoard />} />
            <Route path="/question/:id" element={<Poll />} />
            <Route path="/new" exact element={<New />} />
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
