import React,{ Component } from 'react';
import Video from 'react-native-video';
import{
    StyleSheet
}from 'react-native';
import Layout from '../components/layout'

class Player extends Component{
    render(){
        return(
        <Layout
        video={ <Video source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
        ref={(ref) => {
            this.player = ref
        }}
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        resizeMode="contain"
        />
        }/>
        )
    }
}
const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

export default Player

