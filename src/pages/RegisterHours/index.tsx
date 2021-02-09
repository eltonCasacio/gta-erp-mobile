import React from 'react';

import {Wrapper, TimelineContainer, Text, InfoDateTime} from './styles';

import Timeline from '../../components/Timeline';
import DateTime from '../../components/DataTime';
import Button from '../../components/Button';

const RegisterHours = () => {
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
    </Wrapper>
  );
};

export default RegisterHours;
