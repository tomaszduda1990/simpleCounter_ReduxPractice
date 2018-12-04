//counter

const increment = (state, actions) => {
  return {
    ...state,
    count: state.count + 1
  };
};

const decrement = (state, actions) => {
  return {
    ...state,
    count: state.count - 1
  };
};

const add = (state, actions) => {
  return { ...state, count: state.count + actions.value };
};

const remove = (state, actions) => {
  return { ...state, count: state.count + actions.value };
};

// results
const addResult = (state, actions) => {
  return {
    ...state,
    results: state.results.concat({ result: actions.result, id: new Date() })
  };
};
const removeResult = (state, actions) => {
  return {
    ...state,
    results: state.results.filter(item => item.id !== actions.id)
  };
};

export { increment, decrement, add, remove, addResult, removeResult };
