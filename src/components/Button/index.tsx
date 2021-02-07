import React from 'react';
import {Text} from 'react-native';

import * as S from './styles';

const Button = ({children = 'Button'}) => {
  return (
    <S.Wrapper>
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
};

export default Button;
