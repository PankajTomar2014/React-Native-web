import React from 'react';
import {RootStack} from './Navigation/Naviagtor';
import {Provider} from 'react-redux';
import store from './Redux/store';

export default App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};
