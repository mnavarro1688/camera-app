import React from 'react';
import { View, Text } from 'react-native';
import CameraScreen from './components/camerascreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Take a picture</Text>
      <CameraScreen />
    </View>
  );
};

export default App;