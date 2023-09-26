import styled from 'styled-components';
import { theme } from '../../../theme';

export const Container = styled.View`
  position: absolute;
  border-radius: ${theme.borderRadius.md};
  background-color: 'rgba(0, 0, 0, 0.5)';
  padding: 10px;
  gap: 10px;
  align-self: center;
  margin-top: 50%;
`;

export const Title = styled.Text`
  font-size: ${theme.fontsSizes.md};
  color: ${theme.colors.neutralWhite};
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: ${theme.fontsSizes.sm};
  color: ${theme.colors.neutralWhite};
`;
