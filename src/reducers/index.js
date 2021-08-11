import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments'
import auth from './auth';

export default combineReducers({
    comments: commentsReducer,
    auth,
})
