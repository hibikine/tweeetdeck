import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createElectronStorage from 'redux-persist-electron-storage';
import reducer from './reducers';
export default () => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage: createElectronStorage(),
    },
    reducer
  );
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
