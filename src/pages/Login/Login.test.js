import React from 'react';
import renderer from 'react-test-renderer';

import Login from '.';

describe('<Login />', () => {
  it('should render default layout', () => {
    const tree = renderer.create(<Login />).toJSON();

    //tree.children[2].props.onClick();

    expect(tree).toMatchSnapshot();
  });
});
