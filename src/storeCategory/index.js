import React,{Component} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid'
import Search from 'react-native-search-box'
import GridView from 'react-native-super-grid'
import styles from './styles'
import Logo from './logo'
import categories from './categories.json'

class StoreCategory extends Component{
  constructor(props){
    super(props)
    this.state={
      categories
    }
  }

  render(){
    return(
      <ScrollView>
      <Search backgroundColor="#3E90D8"/>
      <GridView
        itemDimension={100}
        items={this.state.categories}
        renderItem={item => (
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Stores')}>
            <View style={styles.item}>
              <Logo location={item.categoryIconLocation}/>
              <Text>
                {item.categoryName}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      </ScrollView>
    )
  }
}

export default StoreCategory;
