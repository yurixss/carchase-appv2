import React from 'react';
import { Button, View } from 'react-native';
import TextApp from '../../components/pattern/TextApp';

export const Configs = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View>
      <TextApp>Configs</TextApp>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
