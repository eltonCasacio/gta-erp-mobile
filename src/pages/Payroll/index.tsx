/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_PAYROLL_BETWEEM_DATE} from '../../graphql/queries/GET_PAYROLL';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as S from './styles';

import Search from '../../components/Search';
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
  const [month, setMonth] = useState('');
  const [monthLimit, setMonthLimit] = useState('');

  const setModal = (dateRegister = new Date().toString()) => {
    let group = groupHours(dateRegister, apontamentos);
    setSelectedRegister(group);
    setShowModal(!showModal);
  };

  const {data} = useQuery(GET_PAYROLL_BETWEEM_DATE, {
    variables: {
      user,
      dateStart: month,
      dateEnd: monthLimit,
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

  const setMonthSelected = (value: string) => {
    const year = new Date().getFullYear();
    setMonth(`${year}-${value}-01`);

    let nextMonth = MesSeguinte(`${year}-${value}`);
    setMonthLimit(`${nextMonth}-01`);
  };

  useEffect(() => {
    getUser();
  }, [data]);

  return (
    <S.Wrapper>
      <Search items={Months} callback={setMonthSelected} />
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
