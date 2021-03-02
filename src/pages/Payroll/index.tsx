import React, {useState, useEffect} from 'react';

import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayrollCard';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';
import Modal from '../../components/Modal';
import ModalContent from '../../components/ModalPayrollContent';

import {getPayroll} from '../../services/payroll';

const items = ['1', '2', '3', '4', '5', '6'];

type Payroll = {
  navigation: any;
};

const Payroll = ({navigation}: Payroll) => {
  const [showModal, setShowModal] = useState(false);

  const [apontamentos, setApontamentos] = useState([]);

  const handleDownload = () => {
    console.log('Download...');
  };

  const handleSave = async () => {
    console.log('Salvando...');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getPayroll()
      .then((dateTime) => setApontamentos(dateTime.apontamentos))
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Wrapper>
      <Search items={items} />

      <S.CardWrapper>
        {apontamentos.map((apontamento, indice) => (
          <Card
            key={indice}
            leftComponent={String(apontamento.registerDateHour).slice(0, 10)}
            rigthComponent="xx:xx-xx:xx-xx:xx"
            callback={toggleModal}
          />
        ))}
      </S.CardWrapper>

      <S.ButtonWrapper>
        <Button label="Download" callback={handleDownload} />
      </S.ButtonWrapper>

      <Rodape navigation={navigation} />

      {showModal && (
        <Modal
          children={
            <ModalContent
              handleSave={handleSave}
              payslipDate="01/01/2020"
              payslip={{
                startJob: '06:00',
                break: '10:00',
                restartJob: '12:00',
                finishedJob: '18:00',
              }}
            />
          }
          callback={toggleModal}
        />
      )}
    </S.Wrapper>
  );
};

export default Payroll;
