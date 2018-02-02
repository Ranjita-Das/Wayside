import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import Item from './item'
import items from './items.json'

import styles from './styles'

class Items extends Component{
  constructor(props){
    super(props)
    this.state={
      items
    }
  }

  render(){
    return(
      <ScrollView>
        {this.state.items.map(
          (item, i)=>

            <TouchableOpacity>
              <Item name={item.name}  price={item.price} availability={item.availability} size={item.size}/>
            </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

export default Items
