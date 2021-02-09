import React from 'react';
import renderer from 'react-test-renderer';

import DataTime from '.';

describe('<DataTime />', () => {
  it('should render default layout', () => {
    const tree = renderer.create(<DataTime />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
