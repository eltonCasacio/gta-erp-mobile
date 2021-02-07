import React from 'react';
import renderer from 'react-test-renderer';

import Menu from '.';

describe('<Menu>', () => {
  it('Testing layout/styles', () => {
    const tree = renderer.create(<Menu />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
