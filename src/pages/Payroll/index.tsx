/* eslint-disable react-hooks/exhaustive-deps */
import * as S from './styles';
import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_PAYROLL_BETWEEM_DATE} from '../../graphql/queries/GET_PAYROLL';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getByUser} from '../../services/queries';
import {GET_PAYSLIP_YEARS} from '../../graphql/queries/GET_PAYSLIP_DOWNLOAD';

import SearchByMonth from '../../components/SearchPayroll/Mes';
import SearchByYear from '../../components/SearchPayroll/Ano';
import Card from '../../components/PayrollCard';
import Rodape from '../../components/Rodape';
import Modal from '../../components/Modal';
import ModalContent from '../../components/ModalPayrollContent';

import {groupHours, removeDuplicate} from '../../controllers/payroll';
import {Months} from '../../utils/weeksAndMonths';
import {MesSeguinte} from '../../utils/formatDate';

const Payroll = ({navigation}: any) => {
  const [user, setUser] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [apontamentos, setApontamentos] = useState([]);
  const [selectedRegister, setSelectedRegister] = useState(['']);
  const [cards, setCards] = useState(['']);
  const [date, setDate] = useState('');
  const [dateLimit, setDateLimit] = useState('');

  const [month, setMonth] = useState('');
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [years, setYears] = useState([]);

  const setModal = (dateRegister = new Date().toString()) => {
    let group = groupHours(dateRegister, apontamentos);
    setSelectedRegister(group);
    setShowModal(!showModal);
  };

  const {data} = useQuery(GET_PAYROLL_BETWEEM_DATE, {
    variables: {
      user,
      dateStart: date,
      dateEnd: dateLimit,
    },
    pollInterval: 500,
  });

  const getUser = async () => {
    const res = await AsyncStorage.getItem('user');
    setUser(String(res));
    if (data) {
      let newList = await removeDuplicate(data.apontamentos);
      setCards(newList);
      setApontamentos(data.apontamentos);
    }
  };

  const setMonthSelected = (mm: string) => {
    setMonth(mm);
  };

  const setYearSelected = (aaaa: string) => {
    setYear(aaaa);
  };

  useEffect(() => {
    setDate(`${year}-${month}-01`);
    let nextMonth = MesSeguinte(`${year}-${month}`);
    setDateLimit(`${nextMonth}-01`);
  }, [month, year]);

  useEffect(() => {
    getUser();
  }, [data]);

  const getYears = () => {
    getByUser(GET_PAYSLIP_YEARS).then((res) => {
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

      let newList = listYear.filter((item: any) => item);
      setYears(newList);
    });
  };

  useEffect(() => {
    getYears();
  }, []);

  return (
    <S.Wrapper>
      <S.SearcWrapper>
        <S.SearcItem>
          <SearchByMonth
            label="MÊS"
            items={Months}
            callback={setMonthSelected}
          />
        </S.SearcItem>
        <S.SearcItem>
          <SearchByYear label="ANO" years={years} callback={setYearSelected} />
        </S.SearcItem>
      </S.SearcWrapper>
      {data &&
        cards.map((date, indice: number) => (
          <Card key={indice} leftComponent={date} callback={setModal} />
        ))}
      <S.CardWrapper />

      <Rodape navigation={navigation} />

      {showModal && (
        <Modal
          children={<ModalContent selectedRegister={selectedRegister} />}
          callback={setModal}
        />
      )}
    </S.Wrapper>
  );
};

export default Payroll;
