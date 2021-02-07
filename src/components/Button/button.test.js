import React from 'react';
import renderer from 'react-test-renderer';

import Button from '.';

describe('<Button />', () => {
  test('Teste de Estrutura', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
