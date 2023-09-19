import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background-color: #fff9f4;
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
  background-color: white;
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
  height: 50px;
`;

export const ClearButton = styled.TouchableOpacity`
  background-color: #d55d63;
  padding: 8px;
  border-radius: 10px;
  width: 150px;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: #452d3d;
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
  background-color: #548c82;
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

export const YesButton = styled.TouchableOpacity`
  background-color: #36db18;
  padding: 24px;
  border-radius: 30px;
  width: 49%;
`;

export const NoButton = styled.TouchableOpacity`
  background-color: orange;
  padding: 24px;
  border-radius: 30px;
  width: 49%;
`;

export const ButtonText2 = styled.Text`
  font-size: 12px;
  color: black;
  font-weight: bold;
  text-align: center;
`;
