import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from '../../reducers';
import Login from '../../screens/Login/Login';

const store = createStore(reducers);

export default (props) => {
  return (
    <Provider store={store}>
      <Login {...props} />
    </Provider>
  )
}
