import React from 'react';
import renderer from 'react-test-renderer';

import Modal from '.';

describe('<Modal />', () => {
  it('should render default layout', () => {
    const tree = renderer.create(<Modal />);

    expect(tree).toMatchSnapshot();
  });
});
