import React from 'react';
import renderer from 'react-test-renderer';

import PersonalData from '.';

describe('<>', () => {
  it('should render default styles', () => {
    const tree = renderer.create(<PersonalData />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
