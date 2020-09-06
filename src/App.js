import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import Main from "./containers/Main/Main";
import Auth from "./containers/Auth/Auth";

class App extends Component {
  routes = (
    <Switch>
      <Route path="/auth" exact component={Auth} />
      <Redirect to="/auth" />
    </Switch>
  );

  componentDidMount() {
    if (this.props.isAuth || localStorage.getItem("token")) {
      this.routes = (
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      );
    }
  }

  render() {
    return <div>{this.routes}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default withRouter(connect(mapStateToProps)(App));
