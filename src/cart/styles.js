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
    imgCol:{
      alignItems:"center",
      justifyContent:"center",
    },
    img:{
      height: deviceHeight*0.15,
      width: deviceWidth*0.30,
    },
    name:{
      alignItems:"center",
    },
    nameText:{
      fontSize: 20,
    },
    info:{
      alignItems:"flex-start",
    },
    infoText:{
      fontSize: 13,
      lineHeight: 20,
      color:"gray"
    },
    moreInfo:{
      fontSize: 13,
      color:"#3E90D8"
    },
    addCol:{
      justifyContent:"flex-end",
    },
    addBtn:{
      marginBottom:deviceHeight*0.02,
      marginRight:deviceWidth*0.05,
      backgroundColor:"#3E90D8",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:4,
      height:deviceHeight*0.03,
      width:deviceWidth*0.05
    },
    addIcon:{
      color:"white"
    }

  }

  export default styles;
