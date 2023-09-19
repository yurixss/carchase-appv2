import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  margin-start: 16px;
  margin-end: 16px;
  padding-bottom: 10px;
  padding-top: 50px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonUser = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.xl};
`;
