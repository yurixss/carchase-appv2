import React from 'react';
import { Container, Text } from './styles';
import { Ionicons } from '@expo/vector-icons';

export const SimpleCard = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </Container>
  );
};
