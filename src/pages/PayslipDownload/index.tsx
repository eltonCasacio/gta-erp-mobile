import React, {useState, useEffect} from 'react';
import {Linking, Alert} from 'react-native';
import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayslipeCard';
import Rodape from '../../components/Rodape';

import {getPayslipDownload} from '../../controllers/payslipDownload';

type PayslipDownloadProps = {
  navigation: any;
};

type HoleriteProps = {
  paymentType: any;
  paymentDate: any;
  holerite: any;
};

const PayslipDownload = ({navigation}: PayslipDownloadProps) => {
  const [payslipList, setPayslipsList] = useState([]);

  const years = ['1', '2', '3', '4'];

  const handleDownload = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  useEffect(() => {
    getPayslipDownload()
      .then(({payslips}) => setPayslipsList(payslips))
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Search items={years} />
      </S.SearchWrapper>

      <S.CardWrapper>
        {payslipList.map(
          ({paymentType, paymentDate, holerite}: HoleriteProps, indice) => (
            <Card
              key={indice}
              leftComponent={paymentType}
              rigthComponent={paymentDate}
              callback={() => handleDownload(holerite.url)}
            />
          )
        )}
      </S.CardWrapper>

      <Rodape navigation={navigation} />
    </S.Wrapper>
  );
};

export default PayslipDownload;
