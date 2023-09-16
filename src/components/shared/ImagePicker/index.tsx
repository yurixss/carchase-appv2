import { useState } from 'react';
import * as ExpoImagePicker from 'expo-image-picker';
import { View, Image } from 'react-native';
import React from 'react';
import { storage } from '../../../../firebase.config';
import { ref, uploadBytes } from 'firebase/storage';
import { Button, Icon, Text } from './styles';
import { Ionicons } from '@expo/vector-icons';

export const CarImagePicker = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    setIsLoading(true);
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setIsLoading(false);

    if (!result.canceled) {
      const uploadUrl = await uploadImageAsync(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
    try {
      const storageRef = ref(storage, `Images/image${Date.now()}`);
      const result = await uploadBytes(storageRef, blob);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <View>
      {!image ? (
        <Button onPress={pickImage}>
          <Text>Selecionar Imagem</Text>
          <Ionicons name="image-outline" size={34} color="white" />
        </Button>
      ) : (
        <View>
          <Text>Imagem Selecionada</Text>
          <Image source={{ uri: image }} style={{ width: 200, height: 150 }} />
        </View>
      )}
      {isLoading && <Text>Loading...</Text>}
    </View>
  );
};
