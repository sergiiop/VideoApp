import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
  
const TimeLeft = (props) => (
  // Imprimimos un texto con el tiempo transcurrido y la duración del video
  <Text style={styles.timer}>
    {props.currentTime}/{props.duration}
  </Text>
);

const styles = StyleSheet.create({
  timer: {
    marginLeft: 5,
    color: '#E82943'
  }
})

export default TimeLeft;