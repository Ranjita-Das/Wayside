import React,{Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid'


import styles from './styles'

class Store extends Component{
  render(){



    return(
      <View style={styles.card}>
        <Grid>
            <Col size={2} style={styles.imgCol}>
              <Image source={{uri : "https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_Césars_2014.jpg"}}
                      style={styles.img}/>
            </Col>
            <Col size={3}>
              <Row size={2} style={styles.name}>
                <Text style={styles.nameText}>{this.props.name}</Text>
              </Row>
              <Row size={3} style={styles.info}>
                <Text style={styles.infoText}>
                  {this.props.address} {"\n"}
                  {this.props.info} {"\n"}
                  {this.props.phone} {"\n"}
                  {this.props.time} {"\n"}
                </Text>
              </Row>
              <Row size={1}>
                <TouchableOpacity ><Text style={styles.moreInfo}>More Info</Text></TouchableOpacity>
              </Row>
            </Col>
        </Grid>
      </View>
    )
  }
}

export default Store
