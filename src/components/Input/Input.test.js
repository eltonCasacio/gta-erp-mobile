import React from 'react';
import renderer from 'react-test-renderer';

import Input from '.';

describe('<Input>', () => {
  test('Testing layout and style', () => {
    const tree = renderer.create(<Input />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
