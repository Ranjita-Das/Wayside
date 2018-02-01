import React from 'react';
import { Image, View } from 'react-native';
import itemImage from './alpha.png'
import styles from './styles'


const ItemImage = () => (
  <View>
    <Image source={itemImage} style={styles.img}/>
  </View>
)

export default ItemImage;
