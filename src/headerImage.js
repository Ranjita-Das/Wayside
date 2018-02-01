import React, {Component} from 'react'
import {View, Image, StyleSheet} from 'react-native'
import itemImg from './login/alpha.png'

export default class ImageHeader extends Component {
  render(){
    return(
  <View style={{ backgroundColor: '#eee' }}>
    <Image
      style={{width:40, height: 40, position: 'absolute', top: 0, left: 0}}
      source={itemImg}
    />
  </View>
)}
};
