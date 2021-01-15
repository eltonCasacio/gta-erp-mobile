import React from 'react';

import * as S from './styles';

const Label = ({title = 'label'}) => {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};

export default Label;
