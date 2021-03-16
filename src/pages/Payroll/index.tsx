/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import GET_PAYROLL from '../../graphql/queries/GET_PAYROLL';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayrollCard';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';
import Modal from '../../components/Modal';
import ModalContent from '../../components/ModalPayrollContent';

import {groupHours, removeDuplicate} from '../../controllers/payroll';
import {FormatDate} from '../../utils/formatDate';

const items = ['1', '2', '3', '4', '5', '6'];

const Payroll = ({navigation}: any) => {
  const [user, setUser] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [apontamentos, setApontamentos] = useState([]);
  const [selectedRegister, setSelectedRegister] = useState(['']);
  const [cards, setCards] = useState(['']);

  const setModal = (dateRegister = new Date().toString()) => {
    let group = groupHours(dateRegister, apontamentos);
    setSelectedRegister(group);

    console.log('TESTEEE SET MODAL', dateRegister, group);

    setShowModal(!showModal);
  };

  const {data} = useQuery(GET_PAYROLL, {
    variables: {
      user,
      date: FormatDate(new Date()).slice(0, 7),
    },
    pollInterval: 1000,
  });

  const handleDownload = () => {
    console.log('Download...');
  };

  const handleSave = async () => {
    console.log('Salvando...');
  };

  const getUser = async () => {
    const res = await AsyncStorage.getItem('user');
    setUser(String(res));
    if (data) {
      let newList = await removeDuplicate(data.apontamentos);
      setCards(newList);
      setApontamentos(data.apontamentos);
    }
  };

  useEffect(() => {
    getUser();
  }, [data]);

  return (
    <S.Wrapper>
      <Search items={items} />
      {data &&
        cards.map((date, indice: number) => (
          <Card key={indice} leftComponent={date} callback={setModal} />
        ))}
      <S.CardWrapper />

      <S.ButtonWrapper>
        <Button label="Download" callback={handleDownload} />
      </S.ButtonWrapper>

      <Rodape navigation={navigation} />

      {showModal && (
        <Modal
          children={
            <ModalContent
              handleSave={handleSave}
              selectedRegister={selectedRegister}
            />
          }
          callback={setModal}
        />
      )}
    </S.Wrapper>
  );
};

export default Payroll;
