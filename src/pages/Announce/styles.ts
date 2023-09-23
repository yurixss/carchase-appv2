import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

export const Body = styled.View`
  padding: 40px;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  padding-top: 40px;
  padding-left: 20px;
  height: 120px;
  gap: 16px;
  align-items: center;
  background-color: ${theme.colors.neutralOrange};
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const Row = styled.View`
  flex-direction: column;
  gap: 10px;
  margin-left: 16px;
  margin-top: 16px;
`;

export const StepContainer = styled.View`
  background-color: white;
  border-radius: ${theme.borderRadius.md};
`;

export const StepNumber = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${theme.colors.neutralOrange};
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
  background-color: white;
  padding: 8px;
  border-radius: ${theme.borderRadius.md};
`;

export const NextButton = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: ${theme.colors.neutralOrange};
  border-radius: ${theme.borderRadius.sm};
  width: 100%;
  height: 50px;
  justify-content: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${theme.colors.success};
  border-radius: ${theme.borderRadius.sm};
  width: 100%;
  height: 50px;
  margin-top: 16px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
