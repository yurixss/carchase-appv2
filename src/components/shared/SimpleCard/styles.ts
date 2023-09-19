import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  max-height: 350px;
  align-self: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: #143c41;
  font-size: 15px;
  font-weight: bold;
  align-self: center;
  margin-left: 10px;
`;
