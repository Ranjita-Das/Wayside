import React,{Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import Search from 'react-native-search-box'
import Store from './store'
import styles from './styles'
import stores from './stores.json'

class Stores extends Component{
  constructor(props){
    super(props)
    this.state={
      stores
    }
  }


  render(){
    return(
      <ScrollView>
        <Search backgroundColor="#3E90D8"/>
        {this.state.stores.map(
          (store,i)=>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Items')}>
            <Store name={store.name} address={store.address} info={store.info} phone={store.phone} time={store.time}/>
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

export default Stores
