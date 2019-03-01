import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export default function configureStore(initialState) {

  const middlewares = [
    applyMiddleware(thunk),
  ];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(...middlewares)
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
