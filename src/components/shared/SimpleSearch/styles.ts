import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View`
  flex-direction: row;
  background-color: #bdcdd0;
  border-radius: ${theme.borderRadius.lg};
  padding-horizontal: 8px;
  margin: 10px;
  min-height: 40px;
  min-width: 200px;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  padding: 10px;
`;

export const ClearButton = styled.TouchableOpacity`
  padding: 10px;
  position: absolute;
  margin-left: 160px;
`;
