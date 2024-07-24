import { configureStore } from '@reduxjs/toolkit';
import schoolReducer from './slices/schoolSlice';

const store = configureStore({
  reducer: {
    school: schoolReducer,
  },
});

export default store;
