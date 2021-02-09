import React from 'react';
import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  callback: Function;
};

const Button = ({children = 'Button', callback}: ButtonProps) => {
  const callbackHandler = () => callback();

  return (
    <S.Wrapper onPress={callbackHandler}>
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
};

export default Button;
