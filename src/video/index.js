import React,{Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import Video from 'react-native-video'


import styles from './styles'

class videoPage extends Component{

  render(){
    return(
      <View>
      <Video
      		ref={(ref) => {
      			this.player = ref
      		}}
      		playInBackground={false}
      		paused={false}
      		style={styles.backgroundVideo}
      		resizeMode={"cover"}
      		muted={false}
      		source={{uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}}
      	/>
      </View>
    )
  }
}

export default videoPage
