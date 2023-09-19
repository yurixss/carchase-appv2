import styled from 'styled-components/native';
import TextApp from '../../components/pattern/TextApp';
import { screenHeight } from '../../utils';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';

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
  background-color: ${theme.colors.success};
  border-radius: ${theme.borderRadius.xl};
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
  background-color: ${theme.colors.background_details};
  border-radius: ${theme.borderRadius.lg};
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
  border-radius: ${theme.borderRadius.xl};
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
  border-radius: ${theme.borderRadius.md};
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${theme.colors.success};
  padding: 24px;
  border-radius: ${theme.borderRadius.xl};
  width: 49%;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: ${theme.colors.neutralOrange};
  padding: 24px;
  border-radius: ${theme.borderRadius.xl};
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
