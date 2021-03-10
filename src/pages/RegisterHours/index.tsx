/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Wrapper, TimelineContainer, InfoDateTime} from './styles';

import Timeline from '../../components/Timeline';
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
      throw error;
    }
  };

  const handleRegisterHour = async () => {
    try {
      const data = await createRegisterHours();
      console.log('TESTE CREATE APONTAMENTO', data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    handleGetRegisters();
  }, []);

  return (
    <Wrapper>
      <TimelineContainer>
        <Timeline apontamentos={apontamentos} />
      </TimelineContainer>

      <InfoDateTime>
        <DateTime />
      </InfoDateTime>

      <Button label="REGISTRAR" callback={() => handleRegisterHour()} />

      <Rodape navigation={navigation} />
    </Wrapper>
  );
};

export default RegisterHours;
