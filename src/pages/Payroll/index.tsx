import React from 'react';

import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayrollCard';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';

type Payroll = {
  navigation: any;
};
const Payroll = ({navigation}: Payroll) => {
  const items = ['1', '2', '3', '4', '5', '6'];

  const handleDownload = () => {
    console.log('Download...');
  };

  return (
    <S.Wrapper>
      <Search items={items} />

      <S.CardWrapper>
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
        <Card leftComponent="01/01/2020" rigthComponent="xx:xx-xx:xx-xx:xx" />
      </S.CardWrapper>

      <S.ButtonWrapper>
        <Button label="Download" callback={handleDownload} />
      </S.ButtonWrapper>

      <Rodape navigation={navigation} />
    </S.Wrapper>
  );
};

export default Payroll;
