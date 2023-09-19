import React from 'react';
import TextApp from '../../components/pattern/TextApp';
import {
  Body,
  Container,
  Header,
  LogoutButton,
  ProfileImage,
  Title,
  Text,
  ButtonText,
} from './styles';
import { SimpleCard } from '../../components/shared/SimpleCard';

export const Configs = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  const defaultImage = require('/Users/yurixss/carchase-appv2/assets/me.jpg');
  return (
    <Container>
      <Title>Configurações Gerais</Title>
      <Header>
        <ProfileImage source={defaultImage} />
        <Text>Yuri Nunes</Text>
        <Text>yurinuness777@gmail.com</Text>
      </Header>
      <Body>
        <SimpleCard title="Configurações do Usuário" />
        <SimpleCard title="Ver/Editar seus Ánuncios" />
        <SimpleCard title="Ánuncios Salvos" />
        <SimpleCard title="Sei lá oq" />
      </Body>
      <LogoutButton onPress={handleLogout}>
        <ButtonText>Logout</ButtonText>
      </LogoutButton>
    </Container>
  );
};
