import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  padding: 20px;
  background-color: blue;
  border-radius: 20px;
  align-self: center;
  margin-top: 20px;
  flex-direction: row;
  gap: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  align-self: center;
`;

export const Icon = styled.Image`
  margin-top: 20px;
  margin-bottom: 20px;
`;
