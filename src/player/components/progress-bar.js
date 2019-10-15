import React from 'react';

// Importamos las progressBar de android y iOS
import {
  Platform,
  ProgressBarAndroid,
  ProgressViewIOS,
  StyleSheet
} from 'react-native';
  
const ProgressBar = (props) => (
  // Dependiendo de la plataforma es la barra que renderizamos
  Platform.select({
    ios: <ProgressViewIOS
            style={styles.progressBarIos}
            progressTintColor="#E82943"
            trackTintColor="light-gray"
            progress={props.progress}
          />,
    android: <ProgressBarAndroid
                color="#E82943"
                indeterminate={false}
                styleAttr="Horizontal"
                style={styles.progressBarAndroid}
                progress={props.progress}
             />
  })
);

const styles = StyleSheet.create({
  progressBarAndroid: {
    width: 240
  },
  progressBarIos: {
    width: 200
  }
})

export default ProgressBar;