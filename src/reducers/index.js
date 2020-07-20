import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
// import all other reducers that may exist here...

const joinedReducers = combineReducers({
  counter: counterReducer
  // other reducers added here if they exist...
});

export default joinedReducers;
