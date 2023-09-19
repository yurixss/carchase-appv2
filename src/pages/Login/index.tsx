import React from 'react';
import {
  Container,
  InputContainer,
  LoginButton,
  LoginButtonText,
  Logo,
  RegisterButton,
  TextInput,
  Title,
} from './styles';

export default function Login({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const defaultImage = require('/Users/yurixss/carchase-appv2/assets/login.jpeg');

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
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
        <RegisterButton title="Login" onPress={handleLogin}>
          <LoginButtonText>Realizar Cadastro</LoginButtonText>
        </RegisterButton>
      </InputContainer>
    </Container>
  );
}
