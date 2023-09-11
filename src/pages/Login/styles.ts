import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  background-color: #f0f0f7;
`;

export const LogoContainer = styled.View`
  max-height: 60%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 32px;
  max-width: 180px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.View`
  margin-top: 10px;
  padding: 30px;
`;

export const TextInput = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding-left: 16px;
  margin-bottom: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 56px;
  background-color: #04d361;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
