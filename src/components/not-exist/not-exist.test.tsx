import * as React from 'react';
import * as renderer from 'react-test-renderer';
import NotExist from './not-exist';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`Render <NotExist />`, () => {
  const tree = renderer
    .create(<Router history={history}>
      <NotExist />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
