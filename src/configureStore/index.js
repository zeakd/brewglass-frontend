import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  // redux chrome extension configure
  const store = createStore(
      reducer,
      initialState,
      composeEnhancers(
        applyMiddleware(
          // thunk,
        )
      )
  );
  //
  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(require('../reducers').default);
  //   });
  // }
  return store;
}
