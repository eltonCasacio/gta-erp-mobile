import React, {useState, useEffect} from 'react';

import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayslipeCard';
import Rodape from '../../components/Rodape';
import Modal from '../../components/Modal';

import {getPayslipDownload} from '../../controllers/payslipDownload';

type PayslipDownloadProps = {
  navigation: any;
};

const PayslipDownload = ({navigation}: PayslipDownloadProps) => {
  const [showModal, setShowModal] = useState(false);

  const [payslipList, setPayslipsList] = useState([]);

  const years = ['1', '2', '3', '4'];

  const toggleModal = () => {
    setShowModal(!showModal);
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
        {payslipList.map(({paymentType, paymentDate}, indice) => (
          <Card
            key={indice}
            leftComponent={paymentType}
            rigthComponent={paymentDate}
            callback={toggleModal}
          />
        ))}
      </S.CardWrapper>

      <Rodape navigation={navigation} />

      {showModal && <Modal children="PayslipDonload" callback={toggleModal} />}
    </S.Wrapper>
  );
};

export default PayslipDownload;
