import { combineReducers } from "redux";
import userReducer from "./users/userReducer";

export default combineReducers({
  user: userReducer,
 
  //
});

// state ={
//   user: { loader: false,
//     userData: [],
//     error: ""},
//     dummyData: {},

// }
