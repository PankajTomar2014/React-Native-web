import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import cart from './cartSlice';
import products from './products';

// Middleware function to log actions
const loggerMiddleware = store => next => action => {
  console.log('Dispatching action:', action.type);
  return next(action);
};

// Customize the default middleware stack
// const customizedMiddleware = getDefaultMiddleware().concat(loggerMiddleware);

// Configure the Redux store with customized middleware
const store = configureStore({
  reducer: {
    cart,
    products,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
