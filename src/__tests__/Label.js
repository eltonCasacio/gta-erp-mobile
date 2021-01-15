import React from 'react';
import render from 'react-test-renderer';

import Label from '../components/Label';

describe('<Label />', () => {
  test('Estrutura do layout', () => {
    const labelJson = render.create(<Label />).toJSON();
    const child = labelJson.children;

    expect(labelJson.type).toEqual('View');
    expect(child).toHaveLength(1);
    expect(child[0].type).toEqual('Text');

    expect(child[0].children).toHaveLength(1);
    expect(typeof child[0].children[0]).toEqual('string');
  });
});
