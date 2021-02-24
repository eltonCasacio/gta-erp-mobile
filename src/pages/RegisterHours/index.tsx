import React, {useEffect} from 'react';
import {Wrapper, TimelineContainer, Text, InfoDateTime} from './styles';

import Timeline from '../../components/Timeline';
import DateTime from '../../components/DataTime';
import Button from '../../components/Button';
import Rodape from '../../components/Rodape';

import {getRegisterHours} from '../../services/registerHours';

type RegisterHoursProps = {
  navigation: any;
};

const RegisterHours = ({navigation}: RegisterHoursProps) => {
  useEffect(() => {
    getRegisterHours().then((hours) => console.log(hours));
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
