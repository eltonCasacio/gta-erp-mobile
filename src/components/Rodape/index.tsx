import React from 'react';
import {Wrapper, WrapperMenu} from './styles';

import Menu from '../Menu';
import {Dimensions} from 'react-native';

const Rodape = () => {
  return (
    <Wrapper Dimension={Dimensions}>
      <WrapperMenu>
        <Menu label="REGISTRAR HORÁRIO" />
      </WrapperMenu>

      <WrapperMenu>
        <Menu label="DOWNLOAD DE HOLERITE" />
      </WrapperMenu>

      <WrapperMenu>
        <Menu label="RELATÓRIO DE MARCAÇÃO" />
      </WrapperMenu>

      <WrapperMenu>
        <Menu label="INFORMAÇÕES DA EMPRESA" />
      </WrapperMenu>
    </Wrapper>
  );
};

export default Rodape;
