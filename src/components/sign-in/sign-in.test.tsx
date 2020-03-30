import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SignIn from './sign-in';

it(`Render <SignIn />`, () => {
  const tree = renderer
    .create(<SignIn
      onSubmit={() => ({})}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
