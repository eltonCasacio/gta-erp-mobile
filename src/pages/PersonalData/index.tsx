import React, {useEffect} from 'react';
import * as S from './styles';

import Rodape from '../../components/Rodape';
import {getPersonalData} from '../../services/personalData';

type PersonalDataProps = {
  navigation: any;
};

const PersonalData = ({navigation}: PersonalDataProps) => {
  useEffect(() => {
    getPersonalData()
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

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
