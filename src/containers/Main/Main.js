import React, { Component } from "react";
import { connect } from "react-redux";
import * as dashboardActions from "../../store/actions/dashboardActions";
import * as authActions from "../../store/actions/authActions";
import styles from "./Main.module.css";
import Admins from "../../components/Admins/Admins";
import Admin from "../../components/Admins/Admin/Admin";

class Main extends Component {
  componentDidMount() {
    this.props.onInit();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeAdmin.status !== this.props.activeAdmin.status) {
      this.props.onInit();
    }
  }

  logoutHandle = () => {
    this.props.logout();
    window.location.reload();
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <Admin
          key={this.props.activeAdmin._id}
          admin={this.props.activeAdmin}
          statusList={this.props.statusList}
          updated={this.props.onUpdateStatus}
        />
        <button className={styles.btnLogout} onClick={this.logoutHandle}>
          Log Out
        </button>
        <hr />
        <Admins
          adminsList={this.props.admins}
          statusList={this.props.statusList}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admins: state.dashboard.admins,
    activeAdmin: state.dashboard.activeAdmin,
    statusList: state.dashboard.statusList,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => dispatch(dashboardActions.init()),
    onUpdateStatus: (adminId, newStatus) =>
      dispatch(dashboardActions.updateStatus(adminId, newStatus)),
    logout: () => dispatch(authActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
