
import { combineReducers } from 'redux';

function appInfoReducer(state = {}) {
  return state;
}

const rootReducer = combineReducers({
  appInfo: appInfoReducer,
});

export default rootReducer;
