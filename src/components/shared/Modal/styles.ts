import styled from 'styled-components';
import { theme } from '../../../theme';

export const Container = styled.div`
  position: absolute;
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.neutralOrange};
  padding: 10px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
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
