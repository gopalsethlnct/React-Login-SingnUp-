import { userActionConstants } from "./actionTypes";

const intialState = {
  loader: false,
  userData: [],
  error: ""
};

const userReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionConstants.DATA_INITIATE: {
      return {
        ...state,
        loader: true,
        userData: [],
        error: ""
      };
    }
    case userActionConstants.DATA_SUCCESS: {
     
      return {
        ...state,
        loader: false,
        userData: payload
      };
    }

    case userActionConstants.DATA_FAILURE: {
      return {
        ...state,
        loader: false,
        error: payload
      };
    }
    default:
      return state;
  }
};

export default userReducer;
