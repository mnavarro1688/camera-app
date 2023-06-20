import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const photoUri = photo.uri;

      const destinationUri = FileSystem.documentDirectory + 'capturedPhoto.jpg'; // Ruta específica para guardar la foto

      try {
        await FileSystem.moveAsync({
          from: photoUri,
          to: destinationUri,
        });
        console.log('Foto guardada en:', destinationUri);
      } catch (error) {
        console.error('Error al guardar la foto:', error);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No tienes permisos para acceder a la cámara.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity style={{ alignSelf: 'flex-end', alignItems: 'center' }} onPress={takePicture}>
            <Image source={require('./camera_icon.png')} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;