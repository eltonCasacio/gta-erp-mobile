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
  const years = ['1', '2', '3', '4'];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getPayslipDownload()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Search items={years} />
      </S.SearchWrapper>

      <S.CardWrapper>
        <Card
          leftComponent="ADIANTAMENTO"
          rigthComponent="3.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="FÉRIAS"
          rigthComponent="5.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
        <Card
          leftComponent="PAGAMENTO"
          rigthComponent="7.200,00"
          callback={toggleModal}
        />
      </S.CardWrapper>

      <Rodape navigation={navigation} />

      {showModal && <Modal children="PayslipDonload" callback={toggleModal} />}
    </S.Wrapper>
  );
};

export default PayslipDownload;
