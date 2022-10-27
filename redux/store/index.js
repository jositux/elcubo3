import { createStore, combineReducers } from 'redux';
import interactiveReducer from '../reducers/interactive';
import userReducer from '../reducers/user';
import dashboardReducer from '../reducers/dashboard';

const rootReducer = combineReducers({
  interactive: interactiveReducer,
  user: userReducer,
  dashboard: dashboardReducer,
});

export default createStore(
  rootReducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);