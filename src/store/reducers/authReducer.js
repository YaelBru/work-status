import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  id: null,
  error: null,
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        token: null,
        id: null,
        error: null,
        isAuthenticated: false
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        id: action.id,
        error: null,
        isAuthenticated: true
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default authReducer;
