import {
  GET_ISSUE_DETAIL,
  GET_ISSUE_DETAIL_SUCCESS,
  GET_ISSUE_DETAIL_FAILED,
} from './actions';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  issue: {},
};

export function issueDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUE_DETAIL: {
      return {
        ...state,
        loading: true,
        issue: {},
        error: null,
      };
    }

    case GET_ISSUE_DETAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        issue: action.payload.issue,
      };
    }

    case GET_ISSUE_DETAIL_FAILED: {
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
