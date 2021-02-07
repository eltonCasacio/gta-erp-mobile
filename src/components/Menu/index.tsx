import React from 'react';
import * as S from './styles';

const Menu = ({label = 'Menu'}) => {
  return (
    <S.Wrapper>
      <S.Text>{label}</S.Text>
    </S.Wrapper>
  );
};

export default Menu;
