import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';
import {persistStore, autoRehydrate} from 'redux-persist';

export default function configureStore (initialState = {}) {
	// const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
  const store = createStore(rootReducer, initialState, compose(autoRehydrate(), window.devToolsExtension && window.devToolsExtension()));
  persistStore(store);
  return store;
}
