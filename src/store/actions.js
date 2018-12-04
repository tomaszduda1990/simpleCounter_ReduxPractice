import * as actionTypes from "./actionTypes";

export const INC_VALUE = () => {
  return {
    type: actionTypes.INC_VALUE
  };
};
export const DEC_VALUE = () => {
  return {
    type: actionTypes.DEC_VALUE
  };
};

export const ADD_VALUE = value => {
  return {
    type: actionTypes.ADD_VALUE,
    value
  };
};
export const SUB_VALUE = value => {
  return {
    type: actionTypes.SUB_VALUE,
    value
  };
};
const saveResult = (result, id) => {
  return {
    type: actionTypes.ADD_RESULT,
    result,
    id
  };
};
const removeResult = id => {
  return {
    type: actionTypes.REMOVE_RESULT,
    id
  };
};
export const ADD_RESULT = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};
export const REMOVE_RESULT = id => {
  return dispatch => {
    setTimeout(() => {
      dispatch(removeResult(id));
    }, 2000);
  };
};
