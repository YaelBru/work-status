import * as actionTypes from "../actions/actionTypes";

const initialState = {
  admins: [],
  activeAdmin: {
    _id: null,
    name: null,
    email: null,
    status: null
  },
  statusList: []
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INIT:
      return {
        ...state,
        admins: action.payload,
      };
    case actionTypes.SET_ADMIN:
      return {
        ...state,
        activeAdmin: action.admin
      };
    case actionTypes.SET_STATUS_LIST:
      return {
        ...state,
        statusList: action.payload
      };
    case actionTypes.SET_STATUS_UPDATE:
      return {
        ...state,
        activeAdmin: action.updatedAdmin
      };
    default:
      return state;
  }
};

export default dashboardReducer;
