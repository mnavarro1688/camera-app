import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';


const CameraScreen = () => {
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Se requieren permisos de cámara para utilizar esta función.');
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef} />
    </View>
  );

};

export default CameraScreen;