import React, { useRef } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import React, { useRef } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

const CameraScreen = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const imagePath = RNFS.DocumentDirectoryPath + '/capturedImage.jpg'; 
      await RNFS.moveFile(data.uri, imagePath);
      console.log('Imagen guardada en:', imagePath);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
      <TouchableOpacity onPress={takePicture} style={{ alignSelf: 'center', position: 'absolute', bottom: 20 }}>
        <Image source={require('../assets/icon.png')} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
