import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import * as S from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Buttom from '../../components/Button';

import {auth} from '../../services/login';

const Login = ({navigation}: any) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleSetUser = (text: string) => setUser(text);
  const handleSetPassword = (text: string) => setPassword(text);

  const login = async () => {
    try {
      await auth(user, password);
      navigation.navigate('RegisterHours', {user});
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <S.Wrapper>
      <Logo />
      {hasError && <S.ErrorMessage>Usuário/Senha incorreto(s)</S.ErrorMessage>}
      <S.InputContainer>
        <Input placeholder="usuário" onChangeText={handleSetUser} />
        <Input placeholder="senha" onChangeText={handleSetPassword} />
        <TouchableOpacity onPress={() => navigation.navigate('#')}>
          <S.ForgotPassword>Esqueci a senha</S.ForgotPassword>
        </TouchableOpacity>
      </S.InputContainer>
      <Buttom label="ENTRAR" callback={login} />
    </S.Wrapper>
  );
};

export default Login;
