import React from 'react';
import * as S from './styles';

const Timeline = ({apontamentos = []}) => {
  const apontamentoEl = apontamentos.map((item, indice) => {
    const {registerDate, registerHour, tipo} = item;

    return (
      <S.TextWrapper key={indice}>
        <S.Text checked>{tipo}</S.Text>
        <S.Text checked>{`${registerDate}   -   ${registerHour}`}</S.Text>
      </S.TextWrapper>
    );
  });

  return <S.Wrapper>{apontamentoEl}</S.Wrapper>;
};

export default Timeline;
