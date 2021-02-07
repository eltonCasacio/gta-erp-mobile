import React from 'react';
import * as S from './styles';

const Input = ({placeholder = 'placeholder'}) => {
  return (
    <S.Wrapper>
      <S.Text placeholder={placeholder} />
    </S.Wrapper>
  );
};

export default Input;
