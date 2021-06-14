import React from 'react';
import {HelloWorld} from '../src/components/Hello';
import renderer from 'react-test-renderer';

test('HelloWorld', () => {
    const component = renderer.create(
      <HelloWorld />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
