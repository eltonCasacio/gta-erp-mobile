import React from 'react';
import * as S from './styles';

export type CardProps = {
  leftComponent: string;
  rigthComponent: string;
  callback: Function;
};

const Card = ({leftComponent, callback}: CardProps) => {
  return (
    <S.Wrapper onPress={() => callback()}>
      <S.Text>{leftComponent}</S.Text>
    </S.Wrapper>
  );
};

export default Card;
