import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width / 5.0};
  height: ${Dimensions.get('window').width / 5.0};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 30px;
  background-color: #fff;
  margin-bottom: 40px;
`;
