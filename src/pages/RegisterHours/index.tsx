/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import * as S from './styles';

import {useQuery} from '@apollo/client';
import {GET_REGISTER_HOURS} from '../../graphql/queries/GET_REGISTER_HOURS';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTime from '../../components/DataTime';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';

import {createRegisterHours} from '../../controllers/registerHours';

export type RegisterHoursProps = {
  navigation: any;
  route: any;
};

const RegisterHours = ({navigation}: RegisterHoursProps) => {
  const [user, setUser] = useState('');
  const [apontamentos, setApontamentos] = useState([]);

  const {data} = useQuery(GET_REGISTER_HOURS, {
    variables: {
      user,
      limit: 4,
    },
    pollInterval: 500,
  });

  const handleCreateRegister = async () => {
    try {
      const newApontamento = await createRegisterHours(apontamentos);

      const removedFirstItem =
        apontamentos.length >= 4 ? [...apontamentos].slice(1) : apontamentos;

      setApontamentos([...removedFirstItem, newApontamento]);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    const res = await AsyncStorage.getItem('user');
    setUser(String(res));
    if (data) {
      setApontamentos(data.apontamentos);
    }
  };

  useEffect(() => {
    getUser();
  }, [data]);

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
