import { combineReducers } from 'redux';
import NewsReducers from './NewsReducers';
import SelectNewsReducer from './SelectNewsReducer';

export default combineReducers({
    news: NewsReducers,
    selectNews: SelectNewsReducer
});
