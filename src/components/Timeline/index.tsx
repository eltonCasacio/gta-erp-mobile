import React from 'react';
import * as S from './styles';

const Timeline = () => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Text checked>Entrada:</S.Text>
        <S.Text checked>06:00</S.Text>
      </S.TextWrapper>

      <S.TextWrapper>
        <S.Text checked={false}>Saída:</S.Text>
        <S.Text checked>10:00</S.Text>
      </S.TextWrapper>

      <S.TextWrapper>
        <S.Text checked={false}>Saída:</S.Text>
        <S.Text checked>12:00</S.Text>
      </S.TextWrapper>

      <S.TextWrapper>
        <S.Text checked={false}>Saída:</S.Text>
        <S.Text checked>18:00</S.Text>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Timeline;
