import * as actionTypes from "./actionTypes";
const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC_VALUE:
      return {
        ...state,
        count: state.count + 1
      };
    case actionTypes.ADD_VALUE:
      return {
        ...state,
        count: state.count + action.value
      };
    case actionTypes.DEC_VALUE:
      return {
        ...state,
        count: state.count - 1
      };
    case actionTypes.SUB_VALUE:
      return {
        ...state,
        count: state.count - action.value
      };
    default:
      return state;
  }
};

export default reducer;
