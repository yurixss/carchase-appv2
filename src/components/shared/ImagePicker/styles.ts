import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Button = styled.TouchableOpacity`
  padding: 20px;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.lg};
  align-self: center;
  margin-top: 20px;
  flex-direction: row;
  gap: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  align-self: center;
`;

export const Icon = styled.Image`
  margin-top: 20px;
  margin-bottom: 20px;
`;
