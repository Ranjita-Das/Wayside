import {StyleSheet, Dimensions} from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = {
  item:{
    height: deviceHeight*0.15,
    backgroundColor:"white",
    borderWidth: 0.5,
    borderColor: 'gray',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  img:{
    width:deviceWidth*0.1,
    height: deviceWidth*0.1,
  }
}

export default styles;
