import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import SimpleSearch from '../../shared/SimpleSearch';
import { ButtonUser, Container, Content } from './styles';

export default function Header({ setSearchCar }): JSX.Element {
  return (
    <Container>
      <Content>
        <ButtonUser>
          <Feather name="user" size={28} color="black" />
        </ButtonUser>

        <SimpleSearch onSearch={(value) => setSearchCar(value)} />

        <ButtonUser>
          <Feather name="shopping-bag" size={28} color="black" />
        </ButtonUser>
      </Content>
    </Container>
  );
}
