import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'

import styles from './styles'

class CartItems extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <ScrollView>
        <Text>Cart Items</Text>
      </ScrollView>
    )
  }
}

export default CartItems
