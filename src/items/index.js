import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import Item from './item'
import items from './items.json'
//import cart from './cartItems.json'

import styles from './styles'

class Items extends Component{
  constructor(props){
    super(props)
    this.state={
      items,
    }
  }

  itemClicked(item){
    this.props.navigation.navigate('CartItems', {cartItem: item});
  }


  render(){
    return(
      <ScrollView>
        {this.state.items.map(
          (item, i)=>

            <TouchableOpacity>
              <Item name={item.name}  price={item.price} availability={item.availability} size={item.size} itemClicked={()=>this.itemClicked(item)} itemRemoved={()=>itemRemoved(item).bind(this)}/>
            </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

export default Items
