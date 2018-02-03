import React, {Component} from 'react'
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native'
import {Grid, Col, Row} from 'react-native-easy-grid'

import styles from './styles'
import Logo from './logo'




export default class Login extends Component{


  render(){
    console.log("hi")
    return(
    <Grid>
      <Row style={styles.logoBackground}>
      <View style={styles.centerAligned}>
        <Logo />
      </View>
      </Row>

      <Row style={styles.textBackground}>
            <View style={styles.centerAligned}>
            <TextInput
              style={styles.textField}
              placeholder='Name'
              placeholderTextColor='black'
            />

            <TextInput
              style={styles.textField}
              placeholder='Email'
              placeholderTextColor='black'
            />

            <TextInput
              style={styles.textField}
              placeholder='Phone Number'
              placeholderTextColor='black'
            />

            <TouchableOpacity onPress={ ()=> this.props.navigation.navigate("Location")} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            </View>
        </Row>
    </Grid>

    )
  }
}
