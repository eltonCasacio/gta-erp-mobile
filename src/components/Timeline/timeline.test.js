import React from 'react';
import renderer from 'react-test-renderer';

import Timeline from '.';

describe('<Timeline />', () => {
  it('should render default styles', () => {
    const tree = renderer.create(<Timeline />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
