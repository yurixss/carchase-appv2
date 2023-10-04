import styled from 'styled-components/native';

export const ContainerConfirmButton = styled.View`
  padding: 15px;
  background-color: orange;
  border-radius: 20px;
  gap: 20px;
  align-self: center;
  justify-content: center;
  margin-top: 200px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextsContainer = styled.View`
  max-width: 100%;
  gap: 10px;
`;

export const Title = styled.Text`
  align-self: center;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  align-self: center;
  line-height: 22px;
`;

export const ButtonsContainer = styled.View`
  gap: 8px;
  align-items: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  padding: 12px;
  background-color: white;
  border-radius: 10px;
`;

export const CancelButton = styled.TouchableOpacity`
  align-self: center;
  padding: 12px;
  background-color: white;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
`;
