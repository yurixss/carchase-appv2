import React from 'react';
import TextApp from '../../components/pattern/TextApp';
import { Body, Container, LogoutButton, Title } from './styles';
import { SimpleCard } from '../../components/shared/SimpleCard';

export const Configs = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <Container>
      <Title>Configurações Gerais</Title>
      <Body>
        <SimpleCard title="Configurações do Usuário" />
        <SimpleCard title="Ver/Editar seus Ánuncios" />
        <SimpleCard title="Ánuncios Salvos" />
      </Body>
      <LogoutButton onPress={handleLogout}>
        <TextApp>Logout</TextApp>
      </LogoutButton>
    </Container>
  );
};
