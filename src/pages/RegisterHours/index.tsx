/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import * as S from './styles';

import DateTime from '../../components/DataTime';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';

import {
  getRegisterHours,
  createRegisterHours,
} from '../../controllers/registerHours';

export type RegisterHoursProps = {
  navigation: any;
  route: any;
};

const RegisterHours = ({navigation, route}: RegisterHoursProps) => {
  const {user} = route.params;
  const [apontamentos, setApontamentos] = useState([]);

  const handleGetRegisters = async () => {
    try {
      const data = await getRegisterHours(user, 4);
      setApontamentos(data.apontamentos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateRegister = async () => {
    try {
      const newList = await createRegisterHours(apontamentos);
      setApontamentos(newList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetRegisters();
  }, []);

  return (
    <S.Wrapper>
      <S.WrapperTimeline>
        {apontamentos.map(({registerDate, registerHour, tipo}: any, indice) => (
          <S.TextWrapper key={indice}>
            <S.Card>{tipo}</S.Card>
            <S.Card>{`${registerDate}   -   ${registerHour}`}</S.Card>
          </S.TextWrapper>
        ))}
      </S.WrapperTimeline>

      <S.InfoDateTime>
        <DateTime />
      </S.InfoDateTime>

      <Button label="REGISTRAR" callback={() => handleCreateRegister()} />

      <Rodape navigation={navigation} />
    </S.Wrapper>
  );
};

export default RegisterHours;
