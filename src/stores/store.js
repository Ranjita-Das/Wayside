import React,{Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid'


import styles from './styles'

class Store extends Component{
  render(){

    const {name, info, address, phone, time}=this.props

    return(
      <View style={styles.card}>
        <Grid>
            <Col size={2} style={styles.imgCol}>
              <Image source={{uri : "https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_Césars_2014.jpg"}}
                      style={styles.img}/>
            </Col>
            <Col size={3}>
              <Row size={2} style={styles.name}>
                <Text style={styles.nameText}>{name}</Text>
              </Row>
              <Row size={3} style={styles.info}>
                <Text style={styles.infoText}>
                  {address} {"\n"}
                  {info} {"\n"}
                  {phone} {"\n"}
                  {time} {"\n"}
                </Text>
              </Row>
              <Row size={1}>
                <Text style={styles.moreInfo}>More Info</Text>
              </Row>
            </Col>
        </Grid>
      </View>
    )
  }
}

export default Store
