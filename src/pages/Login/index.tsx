import React from 'react';
import {Wrapper, InputContainer} from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Buttom from '../../components/Button';

import {Auth} from '../../services/login';

const Login = ({navigation}: any) => {
  const exec = () => {
    if (Auth()) {
      // navigation.navigate('RegisterHours');
    }
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
