import React from 'react';
import {
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Platform
}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

function PlayPause(props){
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.containter}
            underlayColor='red'
            hitSlop={{left:5,top:5,bottom:5,right:5}}
        >
            {
                props.paused ?
                Platform.select({
                    ios: <Icon name='ios-play' size ={20} color ='#E82943' />,
                    android: <Icon name= 'md-play' size ={20} color ='#E82943'/>
                })
                :
                Platform.select({
                    ios: <Icon name='ios-pause' size ={20} color ='#E82943' />,
                    android: <Icon name= 'md-pause' size ={20} color ='#E82943'/>
                })
            }
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      paddingHorizontal: 10,
      marginVertical: 5,
    }
  })

export default PlayPause;