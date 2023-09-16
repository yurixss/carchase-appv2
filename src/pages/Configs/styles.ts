import styled from 'styled-components/native';
import { screenPadding } from '../../utils';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 ${screenPadding}px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: auto;
  align-self: center;
  margin-bottom: 50px;
  padding: 10px;
  max-width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #bdcdd0;
`;
