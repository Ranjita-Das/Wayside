import {Dimensions} from 'react-native'

const deviceWidth= Dimensions.get('window').width;
const deviceHeight= Dimensions.get('window').height;

const styles={
  card:{
    backgroundColor:"white",
    height: deviceHeight*0.25,
    width: deviceWidth,
  },
  backgroundVideo: {
    position:"relative",
    height: deviceHeight*0.25,
    width: deviceWidth,
    backgroundColor:"black"
  },
}
 export default styles;
