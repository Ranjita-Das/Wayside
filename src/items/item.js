import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {Grid, Col, Row} from 'react-native-easy-grid'

import styles from './styles'

class Item extends Component{
  render(){
    const {name, price, availability, size, navToCart}=this.props
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
                {price} {"\n"}
                {availability} {"\n"}
                {size}
              </Text>
            </Row>
          </Col>
          <Col size={0.5} style={styles.addCol}>
            <TouchableOpacity onPress={navToCart} style={styles.addBtn}><Text style={styles.addIcon}>+</Text></TouchableOpacity>
          </Col>
      </Grid>
      </View>
    )
  }
}

export default Item;
