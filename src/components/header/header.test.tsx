import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from './header';
import {Router} from 'react-router-dom';
import history from '../../history';

const userAuth = `AUTH`;
const userNoAuth = `NO_AUTH`;
const userInfo = {
  'avatar_url': `img/1.png`,
  'email': `Oliver.conner@gmail.com`,
  'id': 1,
  'is_pro': false,
  'name': `Oliver.conner`
};

describe(`Render <Header />`, () => {
  it(`Logged in user`, () => {
    const tree = renderer
      .create(<Router history={history}>
        <Header
          userAuth={userAuth}
          userInfo={userInfo}
        />
      </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Unauthorized user `, () => {
    const tree = renderer
      .create(<Router history={history}>
        <Header
          userAuth={userNoAuth}
          userInfo={null}
        />
      </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
