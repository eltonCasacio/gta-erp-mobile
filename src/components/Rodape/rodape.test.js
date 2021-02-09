import React from 'react';
import renderer from 'react-test-renderer';

import Rodape from '.';

describe('<Rodape />', () => {
  it('should render default layout', () => {
    const tree = renderer.create(<Rodape />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
