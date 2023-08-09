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
      className="login-form__input input username"
      placeholder="Username"
      id="username"
      value={username}
      onChange={usernameChange}
    />
  );
};

const Password = (): ReactElement => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const passwordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form__input input">
      <input
        type={showPassword ? 'text' : 'password'}
        className="login-form__input_form password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={passwordChange}
      />
      <button type="button" className="login-form__input_btn" onClick={passwordVisibility}></button>
    </div>
  );
};

const submit = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  console.log(event);
  // отправка данных на сервер для аутентификации
};

const LoginForm = (): ReactElement => {
  return (
    <div className="login-form">
      <form className="login-form__wrapper" onSubmit={submit}>
        <h2 className="login-form__title">Login</h2>
        <label className="login-form__label" htmlFor="username">
          Username
        </label>
        <Username />
        <label className="login-form__label">Password</label>
        <Password />
        <button className="login-form__submit btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
