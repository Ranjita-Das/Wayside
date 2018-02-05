import React,{Component} from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import { AppRegistry, TextInput, Image, View , StyleSheet} from 'react-native'
import Login from './login/index'
import NearYou from './location/nearYou'
import OnTheWay from './location/onTheWay'
import StoreCategory from './storeCategory/index'
import Stores from './stores/index'
import Items from './items/index'
import VideoPage from './video/index'
import CartItems from './cart/index'

import LinearGradient from 'react-native-linear-gradient'


const Router = StackNavigator({


  Login: { screen: Login },

  Location: {
      screen: TabNavigator(
        {
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
        },
      {
       tabBarPosition: 'bottom',
       animationEnabled: false,
       swipeEnabled: true,
      }
    ),
      navigationOptions: {
            title:"Location Details",
            headerStyle: { backgroundColor: '#3E90D8'},
            headerTitleStyle: { color: 'white'},
            headerTintColor:"white",
            headerBackTitle:"",
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
    },
    Stores:{
      screen: Stores,
      navigationOptions:{
        title:"Stores",
        headerStyle:{
          backgroundColor:"#3E90D8"
        },
        headerTitleStyle:{
          color:"white",
        },
        headerTintColor:"white"
      }
    },

    VideoPage:{
      screen: VideoPage,
      navigationOptions:{
        title:"Video",
        headerStyle:{
          backgroundColor:"#3E90D8"
        },
        headerTitleStyle:{
          color:"white",
        },
        headerTintColor:"white"
      }
    },
    CartItems:{
      screen: CartItems,
      navigationOptions:{
        title:"Your Cart",
        headerStyle:{
          backgroundColor:"#3E90D8"
        },
        headerTitleStyle:{
          color:"white",
        },
        headerTintColor:"white"
      }
    },
    Items:{
      screen: Items,
      navigationOptions:{
        title:"Items",
        headerStyle:{
          backgroundColor:"#3E90D8"
        },
        headerTitleStyle:{
          color:"white",
        },
        headerTintColor:"white"
      }
    },


})

export default Router;

AppRegistry.registerComponent('Router', () => Router);
