import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import detailsReducer from './detailsSlice';

const store = configureStore({
  reducer: { home: homeReducer, details: detailsReducer },
});

export default store;
