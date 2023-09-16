import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
`;

export const Body = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
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
  background-color: orange;
  border-radius: 15px;
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
  margin-top: 20px;
  justify-content: space-around;
`;

export const ClearButton = styled.TouchableOpacity`
  background-color: red;
  padding: 8px;
  border-radius: 10px;
  width: 150px;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: orange;
  padding: 8px;
  border-radius: 10px;
  width: 150px;
  align-self: center;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: #657a38;
  padding: 8px;
  border-radius: 10px;
  width: 150px;
  align-self: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: #657a38;
  padding: 16px;
  border-radius: 15px;
  width: 90%;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
