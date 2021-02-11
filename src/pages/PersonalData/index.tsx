import React from 'react';

import * as S from './styles';

import Rodape from '../../components/Rodape';

type PersonalDataProps = {
  navigation: any;
};

const PersonalData = ({navigation}: PersonalDataProps) => {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.Text>Informações do usuario</S.Text>
      </S.InfoWrapper>
      <Rodape navigation={navigation} />
    </S.Wrapper>
  );
};

export default PersonalData;
