import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width / 5.0};
  height: ${Dimensions.get('window').width / 5.0};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: ${theme.borderRadius.lg};
  background-color: white;
  margin-bottom: 40px;
`;
