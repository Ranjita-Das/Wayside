import {Dimensions} from 'react-native'

const deviceWidth= Dimensions.get('window').width;
const deviceHeight= Dimensions.get('window').height;

const styles={
  card:{
    backgroundColor:"white",
    height: deviceHeight*0.18,
    width: deviceWidth,
    marginBottom: 1,
  },

}

export default styles;
