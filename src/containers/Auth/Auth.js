import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/authActions";
import Input from "../../components/UI/Input/Input";
import styles from "./Auth.module.css";

class Auth extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isLogin: true,
  };

  inputChangeHandler = (event) => {
    const inputVal = event.target.value;
    this.setState({ [event.target.name]: inputVal });
  };

  authFormModeHandler = () => {
    let mode = this.state.isLogin;
    this.setState({ isLogin: !mode });
  };

  authHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.isLogin
    );
  };

  render() {
    return  (
      <div className={styles.auth}>
        <h1 style={{ textAlign: "center" }}>Work Status Manager</h1>
        <form onSubmit={this.authHandler}>
          {!this.state.isLogin && (
            <Input
              label="Enter Full Name"
              name="name"
              inputType="text"
              value={this.state.name}
              changed={this.inputChangeHandler}
            />
          )}
          <Input
            label="Enter Email"
            name="email"
            inputType="text"
            value={this.state.email}
            changed={this.inputChangeHandler}
          />
          <Input
            label="Enter Password"
            name="password"
            inputType="password"
            value={this.state.password}
            changed={this.inputChangeHandler}
          />
          <button className={styles.btnSubmit}>
            {!this.state.isLogin ? "Sing Up" : "Sing In"}
          </button>
        </form>

        {this.props.error && (<p className={styles.errorMsg}>{this.props.error}</p>)}

        <button
          className={styles.btnRegister}
          onClick={this.authFormModeHandler} >
          {this.state.isLogin
            ? "Not Registered? Register Now"
            : "Have an account? Login"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, name, loginMode) =>
      dispatch(actions.auth(email, password, name, loginMode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
