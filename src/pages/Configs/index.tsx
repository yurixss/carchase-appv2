import React from 'react';
import {
  Body,
  Container,
  LogoutButton,
  ProfileImage,
  Title,
  Text,
  ButtonText,
  ProfileContainer,
  Header,
} from './styles';
import { SimpleCard } from '../../components/shared/SimpleCard';

export const Configs = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  const defaultImage = require('/Users/yurixss/carchase-appv2/assets/me.jpg');
  return (
    <Container>
      <Header>
        <Title>Configurações Gerais</Title>
      </Header>
      <ProfileContainer>
        <ProfileImage source={defaultImage} />
        <Text>Yuri Nunes</Text>
        <Text>yurinuness777@gmail.com</Text>
      </ProfileContainer>
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
