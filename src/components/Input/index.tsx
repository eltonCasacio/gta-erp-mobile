import React from 'react';
import * as S from './styles';

type InputProps = {
  placeholder: string;
  onChangeText: any;
};

const Input = ({placeholder = 'placeholder', onChangeText}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Text
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
      />
    </S.Wrapper>
  );
};

export default Input;
