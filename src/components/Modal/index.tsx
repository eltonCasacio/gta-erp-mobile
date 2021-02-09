import React from 'react';
import * as S from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';

export type ModalProps = {
  children?: React.ReactNode;
};

const Modal = ({children}: ModalProps) => {
  return (
    <S.Wrapper>
      <TouchableOpacity>
        <Icon name="times" size={20} color="#fafafa" />
      </TouchableOpacity>
      {children}
    </S.Wrapper>
  );
};

export default Modal;
