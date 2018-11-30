import * as actionTypes from "./actionTypes";
const initialState = {
  count: 0,
  results: []
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
    case actionTypes.ADD_RESULT:
      return {
        ...state,
        results: state.results.concat({ result: action.result, id: new Date() })
      };
    case actionTypes.REMOVE_RESULT:
      return {
        ...state,
        results: state.results.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
