import styled from 'styled-components/native';
import TextApp from '../../components/pattern/TextApp';
import { screenHeight } from '../../utils';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
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
  height: 300px;
  margin-top: 20px;
  border-radius: 10px;
`;

export const Details = styled.Text`
  font-size: 16px;
  padding: 5px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: orange;
  padding: 8px;
  border-radius: 10px;
  width: 100px;
  margin-bottom: 20px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: #657a38;
  padding: 16px;
  border-radius: 15px;
  width: 50%;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: orange;
  padding: 16px;
  border-radius: 15px;
  width: 50%;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
