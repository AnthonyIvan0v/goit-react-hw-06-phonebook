import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistConfing = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfing, rootReducer);

export default persistedReducer;
