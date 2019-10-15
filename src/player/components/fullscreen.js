import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

// Importamos Ionicons de react native vector
import Icon from 'react-native-vector-icons/Ionicons'

const FullScreen = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
    style={styles.container}
  >
  {
    // Dependiendo de la plataforma es el icono que renderizamos
    Platform.select({
      ios: <Icon name="ios-expand" size={20} color="#E82943" />,
      android: <Icon name="md-expand" size={20} color="#E82943" />
    })
  }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginVertical: 5,
  }
})

export default FullScreen;