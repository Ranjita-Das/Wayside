import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import {Grid, Col, Row} from 'react-native-easy-grid'
import cart from '../items/cartItems.json'

import styles from './styles'

class CartItems extends Component{
  constructor(props){
    super(props)
    this.state={
      cart
    }
  }

  removeItem(item){
    console.log(item);
    this.state.cart.pop(item);
    console.log(this.state.cart);
  }

  render(){
    const newItem=this.props.navigation.state.params.cartItem;
    const selectedItemsList=this.state.cart.push(newItem);
    ()=>this.setState({cart:selectedItemsList});
//    console.log(this.state.cart);

    return(
      <ScrollView>
        {this.state.cart.map(
          (item, i)=>

          <View style={styles.card}>
            <Grid>
                <Col size={2} style={styles.imgCol}>
                  <Image source={{uri : "https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_Césars_2014.jpg"}}
                          style={styles.img}/>
                </Col>
                <Col size={3}>
                  <Row size={2} style={styles.name}>
                    <Text style={styles.nameText}>{item.name}</Text>
                  </Row>
                  <Row size={3} style={styles.info}>
                    <Text style={styles.infoText}>
                      {item.price} {"\n"}
                      {item.availability} {"\n"}
                      {item.size}
                    </Text>
                  </Row>
                </Col>
                <Col size={0.5} style={styles.addCol}>
                  <TouchableOpacity onPress={()=>this.removeItem(item)} style={styles.addBtn}><Text style={styles.addIcon}>-</Text></TouchableOpacity>
                </Col>
            </Grid>
          </View>

        )}

      </ScrollView>
    )
  }
}

export default CartItems
