import {StyleSheet, Dimensions} from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles={
  centerAligned:{
    alignItems:"center",
    justifyContent: "center",
  },
  page:{
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor:"white",
    paddingTop: deviceHeight*0.3,
    alignItems: "center"
  },
  guidingText:{
    color:"gray",
  },
  btn:{
    backgroundColor:"#3E90D8",
    width:deviceWidth*0.3,
    height: deviceHeight*0.05,
    alignItems: "center",
    justifyContent:"center",
    marginTop: deviceHeight*0.04,
    borderRadius:deviceHeight*0.02,
  },
  btnText:{
    color:"white",
  }
}

export default styles;
