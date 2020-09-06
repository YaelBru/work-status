import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import { handleResponse } from "../../shared/utility";

// Authentication
export const authStart = () => ({type: actionTypes.AUTH_START});

export const authSuccess = (token, id) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    id: id
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, name, loginMode) => {
  return (dispatch) => {
    dispatch(authStart());
    let authData = {
      email: email,
      password: password,
      name: name,
    };

    if (loginMode) {
      axios
        .post("/auth/login", authData)
        .then((response) => {
          const responseData = handleResponse(response);
          dispatch(authSuccess(responseData.token, response.id));
         
        })
        .catch((error) => {
          dispatch(authFail(error.response.data.message));
        });
    } else {
      axios
        .post("/auth/register", authData)
        .then((response) => {
          const responseData = handleResponse(response);
          dispatch(authSuccess(responseData.token, response.id));
        })
        .catch((error) => {
          dispatch(authFail(error.response.data.message));
        });
    }
  };
};

// Logout
export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(authStart());
  };
};
