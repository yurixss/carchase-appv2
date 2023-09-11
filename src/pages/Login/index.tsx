import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';
import {
  Container,
  InputContainer,
  LoginButton,
  LoginButtonText,
  Logo,
  TextInput,
  Title,
} from './styles';

export default function Login({ navigation }) {
  // const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const defaultImage = require('/Users/yurixss/carchase-appv2/assets/login2.jpeg');

  const handleLogin = () => {
    navigation.navigate('HomeTabs', { screen: 'Home' });
  };

  return (
    <Container>
      <Logo source={defaultImage} />
      <InputContainer>
        <Title>Login</Title>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <LoginButton title="Login" onPress={handleLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </InputContainer>
    </Container>
  );
}
