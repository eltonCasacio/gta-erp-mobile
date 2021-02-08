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
import Timeline from './components/Timeline';

const App = () => {
  return (
    <S.Container>
      <S.Container>
        <Timeline />
      </S.Container>

      <Rodape />
    </S.Container>
  );
};

export default App;
