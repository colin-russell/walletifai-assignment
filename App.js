import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
