import * as actionTypes from "./actionTypes";
import * as utilityFunc from "./utility";
const initialStateCounter = {
  count: 0
};
const initialStateResults = {
  results: []
};

const counterReducer = (state = initialStateCounter, action) => {
  switch (action.type) {
    case actionTypes.INC_VALUE:
      return utilityFunc.increment(state, action);
    case actionTypes.ADD_VALUE:
      return utilityFunc.add(state, action);
    case actionTypes.DEC_VALUE:
      return utilityFunc.decrement(state, action);
    case actionTypes.SUB_VALUE:
      return utilityFunc.remove(state, action);
    default:
      return state;
  }
};
const resultsReducer = (state = initialStateResults, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESULT:
      return utilityFunc.addResult(state, action);
    case actionTypes.REMOVE_RESULT:
      return utilityFunc.removeResult(state, action);
    default:
      return state;
  }
};

export { counterReducer, resultsReducer };
