import React,{ Component } from 'react';
import Video from 'react-native-video';
import{
    StyleSheet,
    ActivityIndicator,
    Text
}from 'react-native';
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/fullscreen';
import TimeLeft from '../components/time-left';
import ProgressBar from '../components/progress-bar'

class Player extends Component{
    state ={
        loading:true,
        paused:false,
        fullScreen:false,
        videoDuration:0.00,
        duration:0.00,
        cureenTime:0.00,
        progress:0.0
    }
    onBuffer=({ isBuffering })=>{
        this.setState({
            loading:isBuffering
        })
    }
    playPause=()=>{
        this.setState({
            paused:!this.state.paused
        })
    }
    fullScreen=()=>{
        this.setState({
            fullScreen: !this.state.fullScreen
        })
    }
    onFullScreen=()=>{
        this.player.presentFullscreenPlayer();
    }
    onLoad = (payload) =>{
        let duration = payload.duration / 60;
        let minutes = Math.floor(duration);
        let seconds = duration % 1;
        seconds = (seconds * 60) / 1000;
        let time = (minutes + seconds * 10).toFixed(2);
        this.setState({
        duration: time
        });
    }
    onProgress= (payload) =>{
        this.setState({
            cureenTime: payload.cureenTime
        })
    }

    render(){

        return(
        <Layout
        loading={this.state.loading}
        style = {styles.container}
        video={
            <Video source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.backgroundVideo}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            ref = {(ref) => {
                this.player = ref
            }}
            onProgress={this.onProgress}
            />
            }
        loader={
            <ActivityIndicator color = 'red' />
        }
        controls={
            <ControlLayout>
                <PlayPause
                    onPress={this.playPause}
                    paused={this.state.paused}
                />
                <ProgressBar progress={this.state.progress} />
                <TimeLeft 
                    duration={this.state.duration} 
                    cureenTime={this.state.cureenTime} 
                />
                <FullScreen 
                    onPress={this.onFullScreen}
                    fullScreen={this.state.fullScreen}
                />
            </ControlLayout>
        }
        />
        );
    }
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        height:100
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

export default Player

