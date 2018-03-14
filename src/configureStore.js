import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerReducer } from 'react-router-redux';
import { reducer } from './store' // Or wherever you keep your reducers

export const configureStore = (middleware) => {
  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    combineReducers({
      chat: reducer,
      router: routerReducer,
    }),
    composeWithDevTools(
      applyMiddleware(middleware, thunk)
    )
  );

  return store
};
