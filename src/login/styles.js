import {Stylesheet, Dimensions} from 'react-native'

const deviceWidth= Dimensions.get('window').width;
const deviceHeight=Dimensions.get('window').height
const inputSize=deviceWidth*0.6

const styles={
  logoBackground:{
    backgroundColor:"white",
    alignItems: "center",
    justifyContent: "center"
  },
  textBackground:{
    backgroundColor:"white",
  },
  textField:{
    width:inputSize,
    height: deviceHeight*0.05,
    borderBottomWidth:deviceHeight*0.0005,
    marginBottom: deviceHeight*0.02,
    marginRight: deviceWidth*0.2,
    marginLeft:deviceWidth*0.2,
  },
  button:{
    backgroundColor:"#3E90D8",
    width:deviceWidth*0.3,
    height: deviceHeight*0.05,
    alignItems: "center",
    justifyContent:"center",
    marginTop: deviceHeight*0.04,
    borderRadius:deviceHeight*0.02,
  },
  buttonText:{
    color:"white",
  },
  centerAligned:{
    alignItems: "center",
  },
  img:{
    width:deviceWidth*0.9,
    height: deviceWidth*0.9,
  }

}

export default styles;
