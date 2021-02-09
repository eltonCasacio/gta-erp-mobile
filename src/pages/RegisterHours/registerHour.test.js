import React from 'react';
import renderer from 'react-test-renderer';

import RegisterHour from '.';

describe('<RegisterHour', () => {
  it('should render default layout', () => {
    const tree = renderer.create(<RegisterHour />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
