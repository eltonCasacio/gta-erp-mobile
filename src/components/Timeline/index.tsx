import React from 'react';
import * as S from './styles';

const Timeline = () => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Text checked>ENTRADA:</S.Text>
        <S.Text checked>06:00</S.Text>
      </S.TextWrapper>

      <S.TextWrapper>
        <S.Text checked={false}>SAÍDA:</S.Text>
        <S.Text checked={false}>10:00</S.Text>
      </S.TextWrapper>

      <S.TextWrapper>
        <S.Text checked={false}>ENTRADA:</S.Text>
        <S.Text checked={false}>12:00</S.Text>
      </S.TextWrapper>

      <S.TextWrapper>
        <S.Text checked={false}>SAÍDA:</S.Text>
        <S.Text checked={false}>18:00</S.Text>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Timeline;
