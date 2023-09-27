import { createStore, combineReducers } from 'redux';
import reducers from './reducers/reducers';
const rootReducer = combineReducers({
  theme: reducers
});
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;