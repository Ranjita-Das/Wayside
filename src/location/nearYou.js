import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native'
import styles from './styles'


class NearYou extends Component{
  render(){
    return(
      <View style={styles.page}>
        <Text style={styles.guidingText}>Please enter your location to find stores near you.</Text>
        <TextInput style={styles.textInput}></TextInput>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Category")} style={styles.btn}>
          <Text style={styles.btnText}>Find Stores</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
 export default NearYou;
