import * as React from 'react';
import createStore from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import Root from './Root';
import { Provider } from 'react-redux';

const { store, persistor } = createStore();
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
);
