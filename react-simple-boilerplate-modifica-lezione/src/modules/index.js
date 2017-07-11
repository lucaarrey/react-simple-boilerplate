import { combineReducers } from 'redux';
import counter from './counter';
import about from './about';
import generator from './generator';

const rootReducer = combineReducers({
  counter,
  about,
  generator,
});

export default rootReducer;