import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'


class NearYou extends Component{
  render(){
    return(
      <View style={styles.page}>
        <Text style={styles.guidingText}>Please enter a location to find stores near you.</Text>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate("")} style={styles.btn}>
          <Text style={styles.btnText}>Find Stores</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
 export default NearYou;
