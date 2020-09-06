import * as actionTypes from "./actionTypes";
import axios from "../../axios";

//Initialize Main.js
export const setInit = (state) => ({
  type: actionTypes.SET_INIT,
  payload: state
});

export const setAdmin = (admin) => ({
  type: actionTypes.SET_ADMIN,
  admin: admin
});

export const setStatusList = (statusList) => ({
  type: actionTypes.SET_STATUS_LIST,
  payload: statusList
});

export const init = () => {
  return (dispatch) => {
    axios.get("/admins").then((response) => {
      let adminsList = response.data;
      let adminId = localStorage.getItem("id");
      let admin = adminsList.find((admin) => admin._id === adminId);
      dispatch(setInit(adminsList));
      dispatch(setAdmin(admin));
    });
    axios.get("/status").then((response) => {
      dispatch(setStatusList(response.data));
    });
  };
};

// Update status
export const setStatusUpdate = (updatedAdmin) => ({
  type: actionTypes.SET_STATUS_UPDATE,
  updatedAdmin: updatedAdmin
});

export const updateStatus = (adminId, newStatus) => {
  let updateData = {
    id: adminId,
    newStatus: newStatus
  };
  return (dispatch) =>
    axios
      .post("/admins/admin-update", updateData)
      .then((res) => dispatch(setStatusUpdate(res.data.admin)));
};
