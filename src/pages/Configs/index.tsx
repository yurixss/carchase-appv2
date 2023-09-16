import React from 'react';
import TextApp from '../../components/pattern/TextApp';
import { Container, LogoutButton } from './styles';

export const Configs = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <Container>
      <TextApp>Configs</TextApp>
      <LogoutButton onPress={handleLogout}>
        <TextApp>Logout</TextApp>
      </LogoutButton>
    </Container>
  );
};
