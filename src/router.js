import React,{Component} from 'react'
import {StackNavigator} from 'react-navigation'
import { AppRegistry } from 'react-native'
import Login from './login/index'
import Location from './location/index'

const Router = StackNavigator({

  Login: { screen: Login },
  Location: { screen: Location },

});

export default Router;

AppRegistry.registerComponent('Router', () => Router);
