import styled from 'styled-components/native';
import H1 from '../../components/pattern/H1';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Body = styled.ScrollView`
  padding: 16px;
`;

export const Header = styled.View`
  height: 200px;
  gap: 10px;
  margin-bottom: 16px;
`;

export const ProfileImage = styled.Image`
  border-radius: 500px;
  height: 120px;
  width: 120px;
  align-self: center;
  margin-top: 25px;
`;

export const Text = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
  align-self: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: auto;
  align-self: center;
  margin-bottom: 50px;
  padding: 10px;
  width: 130px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #bdcdd0;
`;

export const Title = styled(H1)``;
