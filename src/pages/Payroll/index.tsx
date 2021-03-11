import React, {useState, useEffect} from 'react';

import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayrollCard';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';
import Modal from '../../components/Modal';
import ModalContent from '../../components/ModalPayrollContent';

import {
  getPayroll,
  removeDuplicate,
  groupHours,
} from '../../controllers/payroll';

const items = ['1', '2', '3', '4', '5', '6'];

const Payroll = ({navigation}: any) => {
  const [showModal, setShowModal] = useState(false);

  const [apontamentos, setApontamentos] = useState([]);
  const [dates, setDates] = useState(['']);
  const [selectedRegister, setSelectedRegister] = useState(['']);

  const setModal = (dateRegister = new Date().toString()) => {
    let group = groupHours(dateRegister, apontamentos);
    setSelectedRegister(group);

    setShowModal(!showModal);
  };

  const handleDownload = () => {
    console.log('Download...');
  };

  const handleSave = async () => {
    console.log('Salvando...');
  };

  const groupRegisters = async (registers = []) => {
    setApontamentos(registers);
    let response = await removeDuplicate(registers);
    setDates(response);
  };

  useEffect(() => {
    getPayroll()
      .then((dateTime) => groupRegisters(dateTime.apontamentos))
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Wrapper>
      <Search items={items} />
      {dates.map((date, indice) => (
        <Card key={indice} leftComponent={String(date)} callback={setModal} />
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
