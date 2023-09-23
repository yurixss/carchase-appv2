import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  gap: 10px;
  padding: 16px;
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.lg};
  align-self: center;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: white;
  align-self: center;
`;
