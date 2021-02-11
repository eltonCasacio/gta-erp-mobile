import React from 'react';
import {Wrapper, Text} from './styles';

export type CardProps = {
  leftComponent: 'ADIANTAMENTO' | 'PAGAMENTO' | 'FÉRIAS';
  rigthComponent: string;
  callback: Function;
};

const Card = ({leftComponent, rigthComponent, callback}: CardProps) => {
  return (
    <Wrapper onPress={() => callback()}>
      <Text>{leftComponent}</Text>
      <Text>{rigthComponent}</Text>
    </Wrapper>
  );
};

export default Card;
