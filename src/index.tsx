/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import * as S from './styles/principal';

// import Routes from './routes';

import Rodape from './components/Rodape';
import DataTime from './components/DataTime';

const App = () => {
  return (
    <S.Container>
      <S.Container>
        <DataTime />
      </S.Container>
      <Rodape />
    </S.Container>
  );
};

export default App;
