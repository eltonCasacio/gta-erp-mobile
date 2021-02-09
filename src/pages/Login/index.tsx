import React from 'react';
import {Wrapper, InputContainer} from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Buttom from '../../components/Button';

const Login = () => {
  const teste = () => {
    console.log('teste');
  };
  return (
    <Wrapper>
      <Logo />
      <InputContainer>
        <Input placeholder="usuário" />
        <Input placeholder="senha" />
      </InputContainer>
      <Buttom children="entrar" callback={teste} />
    </Wrapper>
  );
};

export default Login;
