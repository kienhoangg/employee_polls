import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { authenUser } from "../actions/shared";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "" || password === "") {
      setSuccess(false);
      setError(true);
      return;
    }
    setSuccess(true);
    setError(false);
    props.dispatch(authenUser(user, password));
    setUser("");
    setPassword("");
  };
  return (
    <form className="new-question" onSubmit={handleLogin}>
      {success && (
        <h1 className={"Success"} data-testid="success-header">
          Name Submitted!
        </h1>
      )}
      {error && (
        <h1 className={"Error"} data-testid="error-header">
          Please enter user and password.
        </h1>
      )}
      <h3 className="center">Login</h3>
      <h4 className="center">User</h4>
      <input
        type="text"
        name="Username"
        data-testid="user"
        className="btnOptionOne"
        placeholder="User"
        value={user}
        onChange={handleUser}
      />
      <h4 className="center">Password</h4>
      <input
        type="password"
        name="Password"
        data-testid="password"
        className="btnOptionOne"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
      />
      <button
        data-testid="submit-button"
        className="btn"
        type="submit"
        // disabled={user === "" || password === ""}
      >
        Submit
      </button>
    </form>
  );
};

export default connect()(Login);
