import React from 'react';
import {Wrapper} from './styles';

import Menu from '../Menu';

type RodapeProps = {
  navigation: any;
};

const Rodape = ({navigation}: RodapeProps) => {
  return (
    <Wrapper>
      <Menu navigation={navigation} />
    </Wrapper>
  );
};

export default Rodape;
