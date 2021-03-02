import React from 'react';
import * as S from './styles';

const Timeline = ({apontamentos = []}) => {
  const apontamentoEl = apontamentos.map((item) => {
    let {registerDateHour, tipo} = item;
    let dateFormated = new Date(registerDateHour).toLocaleDateString();
    let hourFormated = new Date(registerDateHour).toLocaleTimeString();
    return (
      <S.TextWrapper>
        <S.Text checked>{tipo}</S.Text>
        <S.Text checked>{`${dateFormated} - ${hourFormated}`}</S.Text>
      </S.TextWrapper>
    );
  });

  return <S.Wrapper>{apontamentoEl}</S.Wrapper>;
};

export default Timeline;
