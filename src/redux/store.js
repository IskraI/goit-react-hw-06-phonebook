import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const reducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
