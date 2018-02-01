import React,{Component} from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import { AppRegistry, TextInput, Image, View , StyleSheet} from 'react-native'
import Login from './login/index'
import NearYou from './location/nearYou'
import OnTheWay from './location/onTheWay'
import StoreCategory from './storeCategory/index'

import LinearGradient from 'react-native-linear-gradient'
import ImageHeader from './headerImage'


const Router = StackNavigator({

  Login: { screen: Login },

  Location: {
      screen: TabNavigator({
          NearYou:{
            screen: NearYou,
            navigationOptions:{
              title:"Near You",
            }
          },
          OnTheWay:{
            screen: OnTheWay,
            navigationOptions:{
            title:"On The Way",
            }
          }
      }),
      navigationOptions: {
            title:"Location Details",
            headerStyle: { backgroundColor: '#3E90D8'},
            headerTitleStyle: { color: 'white'},
            headerTintColor:"white",
            headerBackTitle:""
          },
    },
    Category:{
      screen:StoreCategory,
      navigationOptions:{
        title:"Store Category",
        headerStyle:{
          backgroundColor:"#3E90D8"
        },
        headerTitleStyle:{
          color:"white",
        },
        headerTintColor:"white"
      }
    }
})

export default Router;

AppRegistry.registerComponent('Router', () => Router);
