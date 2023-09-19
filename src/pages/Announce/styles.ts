import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background-color: white;
`;

export const Body = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 8px;
  margin-left: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const StepContainer = styled.View`
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: ${theme.borderRadius.md};
`;

export const StepNumber = styled.Text`
  font-size: 15px;
  font-weight: bold;
  align-self: center;
  margin-top: 5px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: auto;
  margin-left: auto;
  margin-right: 16px;
  height: 50px;
  width: 160px;
`;

export const ClearButton = styled.TouchableOpacity`
  background-color: ${theme.colors.error};
  border-radius: ${theme.borderRadius.md};
  padding: 8px;
  width: 48%;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: ${theme.colors.neutralOrange};
  border-radius: ${theme.borderRadius.md};
  padding: 8px;
  width: 48%;
  align-self: center;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: #657a38;
  border-radius: ${theme.borderRadius.md};
  padding: 8px;
  width: 48%;
  align-self: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${theme.colors.success};
  padding: 16px;
  border-radius: ${theme.borderRadius.md};
  width: 90%;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
