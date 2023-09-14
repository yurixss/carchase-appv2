import styled from 'styled-components/native';
import TextApp from '../../components/pattern/TextApp';
import { screenHeight } from '../../utils';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: 100%;
  padding: ${RFValue(16, screenHeight)}px;
  margin-top: 20%;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const DetailsContainer = styled.View`
  background-color: #fff;
  padding: 20px;
`;

export const Details = styled(TextApp)`
  font-size: 16px;
  margin-left: 5px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  height: 50px;
  width: 20px;
  background-color: #dc1637;
  margin-right: auto;
`;
