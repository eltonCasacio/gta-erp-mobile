import React from 'react';
import * as S from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import {TouchableOpacity} from 'react-native';
import Theme from '../../styles/Theme';

export type ModalProps = {
  children?: any;
  callback: Function;
};

const Modal = ({children, callback}: ModalProps) => {
  return (
    <S.Wrapper>
      <>
        <S.IconWrapper>
          <TouchableOpacity onPress={() => callback()}>
            <Icon name="times" size={35} color={Theme.Colors.secondary} />
          </TouchableOpacity>
        </S.IconWrapper>

        {!!children && children}
      </>
    </S.Wrapper>
  );
};

export default Modal;
