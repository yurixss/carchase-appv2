import styled from 'styled-components/native';
import TextApp from '../../components/pattern/TextApp';
import { screenHeight } from '../../utils';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(16, screenHeight)}px;
  background-color: #fff9f4;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(16, screenHeight)}px;
  margin-top: ${RFValue(16, screenHeight)}px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const PriceContainer = styled.View`
  height: 40px;
  min-width: 85px;
  max-width: 120px;
  background-color: #36db18;
  border-radius: 25px;
  padding: 8px;
`;

export const Price = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: black;
  align-self: center;
  margin-top: 5px;
`;

export const RowCards = styled.View`
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CardContainer = styled.View`
  height: 40px;
  min-width: 80px;
  background-color: #f5f5f5;
  border-radius: 25px;
  padding: 8px;
`;

export const ColorText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: black;
  align-self: center;
  margin-top: 5px;
`;

export const DetailsContainer = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 16px;
  margin-top: 20px;
  border-radius: 30px;
`;

export const Details = styled.Text`
  font-size: 14px;
  padding: 5px 0;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 20px;
  margin-top: auto;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: white;
  padding: 8px;
  border-radius: 10px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: #36db18;
  padding: 24px;
  border-radius: 30px;
  width: 49%;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: orange;
  padding: 24px;
  border-radius: 30px;
  width: 49%;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const Line = styled.View`
  height: 1px;
  background-color: #000;
  opacity: 0.2;
  width: 100%;
  margin-top: 20px;
`;
