import { useState } from "react";
import * as ExpoImagePicker from 'expo-image-picker';
import { View, TextInput, Button, Image, Text } from "react-native";
import React from "react";

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
    setImage(result.assets[0].uri);
    }
};
  return (
    <View>
      {!image ? (
        <Button title="Imagem" onPress={pickImage} />
      ) : (
        <View>
          <Text>Imagem Selecionada</Text>
          <Image source={{ uri: image }} style={{ width: 200, height: 150 }}/>
        </View>
      )}
      {isLoading && <Text>Loading...</Text>}
    </View>
  )
}
