import React, {Component} from 'react'
import {View, Text} from 'react-native'

import styles from './styles'

class Item extends Component{
  render(){
    return(
      <View style={styles.card}>
        <Text>Item</Text>
      </View>
    )
  }
}

export default Item;
