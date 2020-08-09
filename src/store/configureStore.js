import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from '../reducers';

export default function configureStore(preloadedState) {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(reducer, preloadedState, composeEnhancers());
  return store;
}
