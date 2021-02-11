import React, {useState} from 'react';

import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayslipeCard';
import Rodape from '../../components/Rodape';
import Modal from '../../components/Modal';

type PayslipDownloadProps = {
  navigation: any;
};

const years = ['1', '2', '3', '4'];

const PayslipDownload = ({navigation}: PayslipDownloadProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
