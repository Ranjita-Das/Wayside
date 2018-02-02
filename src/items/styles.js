import {Dimensions} from 'react-native'

const deviceWidth= Dimensions.get('window').width;
const deviceHeight= Dimensions.get('window').height;

const styles={
  card:{
    backgroundColor:"pink",
    height: deviceHeight*0.25,
    width: deviceWidth,
    marginBottom: 1,
  },
}

export default styles;
