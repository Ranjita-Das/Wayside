import React,{Component} from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import { AppRegistry, TextInput, Image, View , StyleSheet} from 'react-native'
import Login from './login/index'
import NearYou from './location/nearYou'
import OnTheWay from './location/onTheWay'
import LinearGradient from 'react-native-linear-gradient'
import ImageHeader from './headerImage'


const Router = StackNavigator({

  Login: { screen: Login },
  Location: {
    navigationOptions: {
      title: <TextInput
          placeholder="Enter your Location"
          placeholderTextColor= 'white'
          style={{
            height: 30,
            width: 200,
            alignItems:"center",
            justifyContent:"center",
            borderBottomColor: "white",
            borderBottomWidth: 0.5,
          }} />,
          headerStyle: { backgroundColor: '#3E90D8'},
          headerTitleStyle: { color: 'white'},
          headerTintColor:"white"
        },
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
      })
    }
});

export default Router;

AppRegistry.registerComponent('Router', () => Router);
