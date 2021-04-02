import React, {useState} from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Buttom from '../../components/Button';

import {
  auth,
  resetPasswordByWhatsapp,
  resetPasswordSendEmail,
} from '../../services/login';

const Login = ({navigation}: any) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSetUser = (text: string) => setUser(text);
  const handleSetPassword = (text: string) => setPassword(text);

  const handleWhatsapp = async () => {
    try {
      await resetPasswordByWhatsapp(user);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const handleSendByEmail = async () => {
    try {
      await resetPasswordSendEmail(user);
    } catch (error) {
      Alert.alert(error);
    }
  };

  const handleLogin = async () => {
    try {
      await auth(user, password);
      navigation.navigate('RegisterHours', {user});
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <S.Wrapper>
      <Logo />
      <S.InputContainer>
        <Input placeholder="usuário" onChangeText={handleSetUser} />
        <Input
          placeholder="senha"
          onChangeText={handleSetPassword}
          passwordType={true}
        />

        <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>

        <TouchableOpacity onPress={handleSendByEmail}>
          <S.LabelWrapper>
            <S.Label>enviar nova senha por email</S.Label>
            <Icon name="envelope" size={20} color="#fff" />
          </S.LabelWrapper>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleWhatsapp}>
          <S.LabelWrapper>
            <S.Label>entrar em contato com o RH</S.Label>
            <Icon name="whatsapp" size={25} color="#24e75e" />
          </S.LabelWrapper>
        </TouchableOpacity>
      </S.InputContainer>
      <Buttom label="ENTRAR" callback={handleLogin} />
    </S.Wrapper>
  );
};

export default Login;
