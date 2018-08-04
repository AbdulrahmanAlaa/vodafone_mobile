/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

import { createStackNavigator } from 'react-navigation'


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
