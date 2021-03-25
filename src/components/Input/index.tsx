import React from 'react';
import * as S from './styles';

type InputProps = {
  placeholder?: string;
  onChangeText: any;
  passwordType?: Boolean;
};

const Input = ({
  placeholder = 'placeholder',
  onChangeText,
  passwordType = false,
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Text
        secureTextEntry={passwordType}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
      />
    </S.Wrapper>
  );
};

export default Input;
