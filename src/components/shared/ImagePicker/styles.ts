import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View``;

export const Button = styled.TouchableOpacity`
  gap: 10px;
  padding: 40px;
  align-items: center;
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.md};
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
  align-self: center;
`;
