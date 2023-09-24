import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  height: 100%;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: 32px;
  max-width: 180px;
  margin-bottom: 10px;
  font-weight: 700;
  color: ${theme.colors.neutralWhite};
`;

export const InputContainer = styled.View`
  padding: 30px;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: ${theme.borderRadius.sm};
  justify-content: center;
  padding-left: 16px;
  margin-bottom: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #04d361;
  border-radius: ${theme.borderRadius.sm};
  justify-content: center;
  align-items: center;
`;

export const RegisterButton = styled.TouchableOpacity`
  height: 50px;
  width: 60%;
  align-self: center;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.sm};
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
