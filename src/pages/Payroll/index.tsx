import React, {useState} from 'react';

import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayrollCard';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';
import Modal from '../../components/Modal';

const items = ['1', '2', '3', '4', '5', '6'];

type Payroll = {
  navigation: any;
};

const Payroll = ({navigation}: Payroll) => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    console.log('Download...');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Wrapper>
      <Search items={items} />

      <S.CardWrapper>
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
        <Card
          leftComponent="01/01/2020"
          rigthComponent="xx:xx-xx:xx-xx:xx"
          callback={toggleModal}
        />
      </S.CardWrapper>

      <S.ButtonWrapper>
        <Button label="Download" callback={handleDownload} />
      </S.ButtonWrapper>

      <Rodape navigation={navigation} />

      {showModal && <Modal children="Payroll..." callback={toggleModal} />}
    </S.Wrapper>
  );
};

export default Payroll;
