import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetchCallback } from '../hooks/useFetchCallback';
import { useForm } from '../hooks/useForm';
import { login } from '../actions';
import { UserIcon } from './UserIcon';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [storedEmail, setStoredEmail] = useLocalStorage('user:email', '');
  const [remember, setRemember] = useLocalStorage('user:remember', false);
  const [values, handleChange] = useForm({
    email: storedEmail,
    password: '',
  });
  const { fetchCall, data, error } = useFetchCallback(
    'http://localhost:3001/api/v1/user/login'
  );

  useEffect(() => {
    if (!data) return;
    const jwt = data.body.token;
    dispatch(login(jwt));
    navigate('/profile');
  }, [data, dispatch, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCall({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    if (remember) setStoredEmail(values.email);
    else setStoredEmail('');
  };

  return (
    <div className="flex justify-center pt-12 mx-4">
      <form
        className="bg-white w-[300px] p-8 flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <UserIcon />
        <h2 className="font-medium text-[1.5rem] my-[0.2rem]">Sign In</h2>
        <div>
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            className="w-full p-[5px] text-[1.2rem] border-[1px] border-grey rounded"
          />
          {error === 'Error: User not found!' ? (
            <p className="text-red text-xs py-1">{error}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            className="w-full p-[5px] text-[1.2rem] border-[1px] border-grey rounded"
          />
          {error === 'Error: Password is invalid' ? (
            <p className="text-red text-xs py-1">{error}</p>
          ) : null}
        </div>
        <div className="w-full flex">
          <input
            type="checkbox"
            id="remember"
            className="mx-1"
            checked={remember}
            onChange={(e) => {
              setRemember(e.target.checked);
            }}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button
          type="submit"
          className="w-full p-2 text-[1.1rem] underline font-medium bg-accent text-white"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
