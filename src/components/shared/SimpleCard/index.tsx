import React from 'react';
import { Container, Text } from './styles';

export const SimpleCard = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};
