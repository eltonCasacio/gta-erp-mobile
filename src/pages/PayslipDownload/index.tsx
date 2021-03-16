import React, {useEffect, useState} from 'react';
import {Linking, Alert} from 'react-native';

import {useQuery} from '@apollo/client';
import GET_PAYSLIP_DOWNLOAD from '../../graphql/queries/GET_PAYSLIP_DOWNLOAD';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Search from '../../components/Search';
import Card from '../../components/PayslipeCard';
import Rodape from '../../components/Rodape';

import * as S from './styles';

type PayslipDownloadProps = {
  navigation: any;
};

type HoleriteProps = {
  paymentType: any;
  paymentDate: any;
  holerite: any;
};

const PayslipDownload = ({navigation}: PayslipDownloadProps) => {
  const [email, setEmail] = useState('');
  const years = ['1', '2', '3', '4'];

  const {data} = useQuery(GET_PAYSLIP_DOWNLOAD, {
    variables: {email},
    pollInterval: 2000,
  });

  const handleDownload = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const getEmail = async () => {
    const res = await AsyncStorage.getItem('user');
    setEmail(String(res));
  };

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Search items={years} />
      </S.SearchWrapper>

      <S.CardWrapper>
        {data?.payslips &&
          data.payslips.map(
            (
              {paymentType, paymentDate, holerite}: HoleriteProps,
              indice: number
            ) => (
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
