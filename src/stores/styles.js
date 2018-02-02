import {Dimensions} from 'react-native'

const deviceWidth= Dimensions.get('window').width;
const deviceHeight= Dimensions.get('window').height;

const styles={
  card:{
    backgroundColor:"white",
    height: deviceHeight*0.25,
    width: deviceWidth,
    marginBottom: 1,
  },
  imgCol:{
    alignItems:"center",
    justifyContent:"center",
  },
  img:{
    height: deviceHeight*0.23,
    width: deviceWidth*0.35,
  },
  name:{
    alignItems:"center",
  },
  nameText:{
    fontSize: 20,
  },
  info:{
    alignItems:"center",
  },
  infoText:{
    fontSize: 13,
    lineHeight: 20,
    color:"gray"
  },
  moreInfo:{
    fontSize: 13,
    color:"#3E90D8"
  }

}
 export default styles;
