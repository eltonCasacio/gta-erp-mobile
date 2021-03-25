import React, {useState} from 'react';
import * as S from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Buttom from '../../components/Button';

const ForgotPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');

  const requestPassword = async () => {
    console.log('EMAIL PARA RESET DE SENHA:', email);
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <Logo />
      <S.InputContainer>
        <Input
          placeholder="email"
          onChangeText={(text: any) => setEmail(text)}
        />
        <S.Label>
          Caso não possua e-mail nem whatsapp, favor procurar o RH
        </S.Label>
      </S.InputContainer>
      <Buttom label="SOLICITAR" callback={requestPassword} />
    </S.Wrapper>
  );
};

export default ForgotPassword;
