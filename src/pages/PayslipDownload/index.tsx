import React, {useEffect, useState} from 'react';
import {Linking, Alert} from 'react-native';

import {useQuery} from '@apollo/client';
import {
  GET_PAYSLIP_DOWNLOAD_BETWEEM_DATE,
  GET_PAYSLIP_YEARS,
} from '../../graphql/queries/GET_PAYSLIP_DOWNLOAD';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getByEmail} from '../../services/queries';

import Search from '../../components/SearchPayslipDownload';
import Card from '../../components/PayslipeCard';
import Rodape from '../../components/Rodape';

import * as S from './styles';

const PayslipDownload = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [years, setYears] = useState([{}]);
  const [year, setYear] = useState('');
  const [yearLimit, setYearLimit] = useState('');

  const {data} = useQuery(GET_PAYSLIP_DOWNLOAD_BETWEEM_DATE, {
    variables: {
      email,
      dateStart: year || '1980-01-01',
      dateEnd: yearLimit || `${Number(new Date().getFullYear()) + 1}-01-01`,
    },
    pollInterval: 1000,
  });

  const handleDownload = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`URL desconhecida: ${url}`);
    }
  };

  const handleYear = (value: string) => {
    setYear(`${value}-01-01`);
    setYearLimit(`${Number(value) + 1}-01-01`);
  };

  const handleSetEmail = async () => {
    const res = await AsyncStorage.getItem('user');
    setEmail(String(res));
  };

  useEffect(() => {
    handleSetEmail();
  }, [data]);

  const getYears = () => {
    getByEmail(GET_PAYSLIP_YEARS).then((res) => {
      let list = [''];

      const listYear = res.payslips.map(({paymentDate}: any, indice: any) => {
        if (!list.includes(paymentDate.slice(0, 4))) {
          list.push(paymentDate.slice(0, 4));
          return {
            indice,
            value: paymentDate.slice(0, 4),
          };
        }
      });

      setYears(listYear.filter((item: any) => item));
    });
  };

  useEffect(() => {
    getYears();
  }, []);

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Search items={years} callback={handleYear} />
      </S.SearchWrapper>

      <S.CardWrapper>
        {data?.payslips &&
          data.payslips.map(
            ({paymentType, paymentDate, holerite}: any, indice: number) => (
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
