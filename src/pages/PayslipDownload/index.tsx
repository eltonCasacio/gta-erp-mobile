import React from 'react';

import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/Card';
import Rodape from '../../components/Rodape';

type PayslipDownloadProps = {
  navigation: any;
};

const years = ['1', '2', '3', '4'];

const PayslipDownload = ({navigation}: PayslipDownloadProps) => {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Search years={years} />
      </S.SearchWrapper>

      <S.CardWrapper>
        <Card leftComponent="ADIANTAMENTO" rigthComponent="3.200,00" />
        <Card leftComponent="FÉRIAS" rigthComponent="5.200,00" />
        <Card leftComponent="PAGAMENTO" rigthComponent="7.200,00" />
      </S.CardWrapper>

      <Rodape navigation={navigation} />
    </S.Wrapper>
  );
};

export default PayslipDownload;
