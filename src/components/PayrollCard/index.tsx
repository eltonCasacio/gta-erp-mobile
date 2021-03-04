import React from 'react';
import * as S from './styles';

export type CardProps = {
  leftComponent: string;
  callback: Function;
};

const Card = ({leftComponent, callback}: CardProps) => {
  return (
    <S.Wrapper onPress={() => callback(leftComponent)}>
      <S.Text>{leftComponent}</S.Text>
    </S.Wrapper>
  );
};

export default Card;
