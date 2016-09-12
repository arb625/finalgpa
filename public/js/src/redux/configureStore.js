import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';
import {persistStore, autoRehydrate} from 'redux-persist';

export default function configureStore (initialState = {}) {
	// test comment 1
	// const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
  // const store = createStore(rootReducer, initialState, compose(autoRehydrate(), window.devToolsExtension && window.devToolsExtension()));
  
  // test comment 2

  const test = 1
  const store = createStore(rootReducer, initialState, autoRehydrate());
  persistStore(store);
  return store;
}
