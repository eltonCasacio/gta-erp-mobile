/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Wrapper, TimelineContainer, Text, InfoDateTime} from './styles';

import Timeline from '../../components/Timeline';
import DateTime from '../../components/DataTime';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';

import {getRegisterHours} from '../../services/registerHours';

type RegisterHoursProps = {
  navigation: any;
  route: any;
};

const RegisterHours = ({navigation, route}: RegisterHoursProps) => {
  const {user} = route.params;

  useEffect(() => {
    getRegisterHours(user)
      .then((hours) => console.log(hours))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Text>Fulano</Text>

      <TimelineContainer>
        <Timeline />
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
