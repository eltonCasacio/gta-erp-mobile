/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Wrapper, TimelineContainer, Text, InfoDateTime} from './styles';

import Timeline from '../../components/Timeline';
import DateTime from '../../components/DataTime';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';

import {getRegisterHours} from '../../services/registerHours';

export type RegisterHoursProps = {
  navigation: any;
  route: any;
};

const RegisterHours = ({navigation, route}: RegisterHoursProps) => {
  const {user} = route.params;
  const [name, setName] = useState('Bem Vindo!');
  const [apontamentos, setApontamentos] = useState([]);

  const handleGetRegisters = async () => {
    try {
      const data = await getRegisterHours(user, 4);
      setApontamentos(data.apontamentos);
      setName(data.apontamentos[0]?.funcionario?.Nome);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    handleGetRegisters();
  }, []);

  return (
    <Wrapper>
      <Text>{name}</Text>

      <TimelineContainer>
        <Timeline apontamentos={apontamentos} />
      </TimelineContainer>

      <InfoDateTime>
        <DateTime />
      </InfoDateTime>

      <Button
        label="REGISTRAR"
        callback={() => console.log('Registro de hora')}
      />

      <Rodape navigation={navigation} />
    </Wrapper>
  );
};

export default RegisterHours;
