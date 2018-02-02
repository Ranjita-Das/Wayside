import React,{Component} from 'react';
import { Image, View,Text } from 'react-native';
import itemImage from './alpha.png'
import styles from './styles'


class ItemImage extends Component{
  render(){
    const {location}=this.props;
    console.log(location);
    return(
      <View>
        <Image style={styles.img} source={{uri: 'https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_Césars_2014.jpg'}}/>

      </View>
    )
  }
}

export default ItemImage;
