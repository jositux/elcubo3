import {
  SET_CURRENT_USER
} from '../actions/user';

const initialState = null;

const interactiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        ...action.payload.user
      };

    default:
      return state
  }
};

export default interactiveReducer;