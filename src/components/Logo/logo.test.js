import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '.';

describe('<Logo />', () => {
  it('should render default component', () => {
    const tree = renderer.create(<Logo />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
