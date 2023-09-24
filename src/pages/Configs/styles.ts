import styled from 'styled-components/native';
import H1 from '../../components/pattern/H1';
import { theme } from '../../theme';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  height: 100px;
  background-color: ${theme.colors.primary};
`;

export const Body = styled.ScrollView`
  padding: 16px;
`;

export const ProfileContainer = styled.View`
  height: 200px;
  gap: 10px;
`;

export const ProfileImage = styled.Image`
  border-radius: ${theme.borderRadius.circular};
  height: 120px;
  width: 120px;
  align-self: center;
  margin-top: 16px;
`;

export const Text = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
  align-self: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.error};
  align-self: center;
  margin-bottom: 50px;
  padding: 10px;
  width: 120px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.neutralWhite};
  font-size: 15px;
  font-weight: bold;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.neutralWhite};
  font-size: 20px;
  font-weight: bold;
  margin-top: 60px;
  margin-left: 10px;
`;
