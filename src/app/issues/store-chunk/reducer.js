import {
  GET_ISSUES,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAILED,
} from './actions';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  items: [],
};

export function issuesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES: {
      return {
        ...state,
        loading: true,
        items: [],
        error: null,
      };
    }

    case GET_ISSUES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.payload.issues,
      };
    }

    case GET_ISSUES_FAILED: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload.error,
      };
    }
  
    default: {
      return state;
    }
  }
}
