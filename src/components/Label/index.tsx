import React from 'react';

import * as S from './styles';

const Label = ({title = 'Label'}) => {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};

export default Label;
