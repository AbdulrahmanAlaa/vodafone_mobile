/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'


import Login from './screens/Login/Login';
import Register from './screens/Register/Register';



export default createStackNavigator({
  Home: {
    screen: Login
  },
  Register: {
    screen: Register
  }
},
  {
    initialRouteName: 'Home',
    headerMode:'none'
  }
);
