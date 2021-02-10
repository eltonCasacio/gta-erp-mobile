import React from 'react';
import {Wrapper, Text} from './styles';

export type CardProps = {
  leftComponent: string;
  rigthComponent: string;
};

const Card = ({leftComponent, rigthComponent}: CardProps) => {
  return (
    <Wrapper>
      <Text>{leftComponent}</Text>
      <Text>{rigthComponent}</Text>
    </Wrapper>
  );
};

export default Card;
