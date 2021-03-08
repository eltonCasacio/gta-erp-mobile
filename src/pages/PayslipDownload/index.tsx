import React, {useState, useEffect} from 'react';
// import {WebView} from 'react-native-webview';
import * as S from './styles';

import Search from '../../components/Search';
import Card from '../../components/PayslipeCard';
import Rodape from '../../components/Rodape';

import {getPayslipDownload} from '../../controllers/payslipDownload';
import {WebView} from 'react-native-webview';

type PayslipDownloadProps = {
  navigation: any;
};

const PayslipDownload = ({navigation}: PayslipDownloadProps) => {
  const [showModal, setShowModal] = useState(false);

  const [payslipList, setPayslipsList] = useState([]);
  const [uriPayslip, setUriPayslip] = useState('');

  const years = ['1', '2', '3', '4'];

  const toggleModal = (uri: string) => {
    console.log(uri);
    setUriPayslip(uri);
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
        {payslipList.map(({paymentType, paymentDate, holerite}, indice) => (
          <Card
            key={indice}
            leftComponent={paymentType}
            rigthComponent={paymentDate}
            callback={() => toggleModal(holerite.url)}
          />
        ))}
      </S.CardWrapper>

      <Rodape navigation={navigation} />

      {showModal && (
        <S.PdfWrapper>
          <WebView source={{uri: uriPayslip}} />
        </S.PdfWrapper>
      )}
    </S.Wrapper>
  );
};

export default PayslipDownload;
