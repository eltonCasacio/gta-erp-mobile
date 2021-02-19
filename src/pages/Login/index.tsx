import React from 'react';
import {Wrapper, InputContainer} from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Buttom from '../../components/Button';

import {auth, getDataTest} from '../../services/Login';

const Login = () => {
  const exec = async () => {
    // auth()
    // navigation.navigate('RegisterHours');
    getDataTest();
  };

  return (
    <Wrapper>
      <Logo />
      <InputContainer>
        <Input placeholder="usuário" />
        <Input placeholder="senha" />
      </InputContainer>
      <Buttom label="ENTRAR" callback={exec} />
    </Wrapper>
  );
};

export default Login;
