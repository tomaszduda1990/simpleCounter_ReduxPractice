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
