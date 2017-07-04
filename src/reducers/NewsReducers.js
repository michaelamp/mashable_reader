import {
  FETCH_NEWS_LISTS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEWS_LISTS:
      return action.payload;
    default:
      return state;
  }
};
