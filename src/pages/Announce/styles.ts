import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  background-color: ${theme.colors.primary};
  flex-direction: row;
  height: 120px;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  padding-top: 50px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-left: 16px;
  margin-top: 16px;
`;

export const Body = styled.View`
  padding: 30px;
  align-items: center;
`;

export const BodyRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: column;
  gap: 10px;
  margin-left: 16px;
  margin-top: 16px;
`;

export const ClearButton = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const NextButton = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: ${theme.colors.primary};
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
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ImageInputContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
