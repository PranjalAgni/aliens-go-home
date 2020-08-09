const createReducer = (intialState, handlersMap) => (
  state = intialState,
  action
) => {
  if (handlersMap.hasOwnProperty(action.type)) {
    return handlersMap[action.type](state, action);
  } else {
    return state;
  }
};

export default createReducer;
