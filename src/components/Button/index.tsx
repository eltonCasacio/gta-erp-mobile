import React from 'react';
import * as S from './styles';

type ButtonProps = {
  label: String;
  callback: Function;
};

const Button = ({label = 'Button', callback}: ButtonProps) => {
  const callbackHandler = () => callback();

  return (
    <S.Wrapper onPress={callbackHandler}>
      <S.Text>{label}</S.Text>
    </S.Wrapper>
  );
};

export default Button;
