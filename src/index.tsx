/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Wrapper, Container, RodapeWrapper} from './styles/principal';

// import Routes from './routes';

import Rodape from './components/Rodape';
import RegisterHours from './pages/RegisterHours';

const App = () => {
  return (
    <Wrapper>
      <Container>
        <RegisterHours />
      </Container>

      <RodapeWrapper>
        <Rodape />
      </RodapeWrapper>
    </Wrapper>
  );
};

export default App;
