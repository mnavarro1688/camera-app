import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraScreen from './components/camerascreen';

const App = () => {
  return (
    <View style={styles.container}>
      <CameraScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
