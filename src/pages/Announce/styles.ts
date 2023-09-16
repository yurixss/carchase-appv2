import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  justify-content: center;
  background-color: white;
`;

export const Label = styled.Text`
  color: black;
  margin-top: 20px;
`;

export const AnimatedContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
