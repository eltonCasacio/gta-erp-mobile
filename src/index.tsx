import React from 'react';
import * as S from './styles/principal';

import {ApolloProvider} from '@apollo/client';
import client from './graphql/client';

import Routes from './routes';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <S.Wrapper>
        <S.Container>
          <Routes />
        </S.Container>
      </S.Wrapper>
    </ApolloProvider>
  );
};

export default App;
