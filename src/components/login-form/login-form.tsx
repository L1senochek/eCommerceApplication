import React, { ReactElement, useState, ChangeEvent, FormEvent } from 'react';
import './login-form.scss';

const Username = (): ReactElement => {
  const [username, setUsername] = useState('');

  const usernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      className="login-form__username"
      placeholder="username"
      id="username"
      value={username}
      onChange={usernameChange}
    />
  );
};

const Password = (): ReactElement => {
  const [password, setPassword] = useState('');

  const passwordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  return (
    <input
      type="password"
      className="login-form__password"
      placeholder="password"
      id="password"
      value={password}
      onChange={passwordChange}
    />
  );
};

const submit = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  console.log(event);
  // отправка данных на сервер для аутентификации
};

const LoginForm = (): ReactElement => {
  return (
    <form className="login-form__wrapper" onSubmit={submit}>
      <h2 className="login-form__title">Login</h2>
      <label className="login-form__label" htmlFor="username">
        Username
      </label>
      <Username />
      <label className="login-form__label">Username</label>
      <Password />
      <button className="login-form__submit" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
