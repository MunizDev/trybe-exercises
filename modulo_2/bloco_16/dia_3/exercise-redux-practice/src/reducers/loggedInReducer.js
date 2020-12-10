const LOG_IN = 'LOG_IN';

const INITIAL_STATE = {
  authenticated: false,
};

function loggedInReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOG_IN:    
      return { ...state, authenticated: true };
    default:
      return state;
  }
}

export default loggedInReducer;
