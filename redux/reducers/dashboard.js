import {
  SET_USERS_RANKING,
  SET_CONFESSIONAL_DATA
} from '../actions/dashboard';

const initialState = {
  ranking: [],
  confessional: []
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_RANKING:
      return {
        ...state,
        ranking: [...action.payload]
      };

    case SET_CONFESSIONAL_DATA:
      return {
        ...state,
        confessional: [...action.payload]
      };

    default:
      return state
  }
};

export default dashboardReducer;