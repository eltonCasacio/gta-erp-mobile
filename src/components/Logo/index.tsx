import React from 'react';
import * as S from './styles';

const Logo = () => {
  return (
    <S.Wrapper
      source={require('../../assets/logo.png')}
      accessibilityLabel="Logo da GTA"
    />
  );
};

export default Logo;
