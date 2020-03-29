import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import SignIn from './sign-in';

const LoginInfo = {
  login: `WTF!?`,
  password: `i dont know...`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user login`, () => {
  const onSubmit = jest.fn();

  const signIn = Enzyme.mount(
      <SignIn
        onSubmit={onSubmit}
      />
  );

  const loginElement = signIn.find(`[name="email"]`).getDOMNode<HTMLInputElement>();
  const passwordElement = signIn.find(`[name="password"]`).getDOMNode<HTMLInputElement>();
  const form = signIn.find(`form`);

  loginElement.value = LoginInfo.login;
  passwordElement.value = LoginInfo.password;
  form.simulate(`submit`);

  expect(onSubmit).toBeCalledWith(LoginInfo);
});
