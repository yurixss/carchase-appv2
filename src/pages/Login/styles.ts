import styled from 'styled-components/native';

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
`;

export const InputContainer = styled.View`
  padding: 30px;
  top: 15%;
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
