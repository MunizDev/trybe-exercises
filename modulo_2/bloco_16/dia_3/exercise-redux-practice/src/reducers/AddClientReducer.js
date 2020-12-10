const ADD_CLIENT = 'ADD_CLIENT';

const INITIAL_STATE = [];

function AddClientReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CLIENT:
      const { name, age, email } = action;
      const newClient = {
        name,
        age,
        email,
      };
      return [...state, newClient];
    default:
      return state;
  }
}

export default AddClientReducer;
