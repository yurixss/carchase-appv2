import styled from 'styled-components/native';
import H1 from '../../components/pattern/H1';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Body = styled.ScrollView`
  padding: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: auto;
  align-self: center;
  margin-bottom: 50px;
  padding: 10px;
  max-width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #bdcdd0;
`;

export const Title = styled(H1)`
  padding: 10px;
`;
