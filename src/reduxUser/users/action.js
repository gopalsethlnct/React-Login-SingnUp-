import { userActionConstants } from "./actionTypes";

export const userDataInitiate = () => ({
  type: userActionConstants.DATA_INITIATE
});

export const userDataSuccess = (data) => {
  console.log(data);
  return({
  type: userActionConstants.DATA_SUCCESS,
  payload: data
});};

export const userDataFailure = (error) => ({
  type: userActionConstants.DATA_FAILURE,
  payload: error
});
