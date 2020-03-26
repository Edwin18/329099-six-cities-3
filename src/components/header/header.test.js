import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';
import {Router} from "react-router-dom";
import history from '../../history.js';

const userAuth = `AUTH`;
const userNoAuth = `NO_AUTH`;
const userInfo = {
  email: `somrthing@email.com`,
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

