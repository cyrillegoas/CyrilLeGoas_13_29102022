import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon } from './UserIcon';

export function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/profile');
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
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-[5px] text-[1.2rem] border-[1px] border-grey rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-[5px] text-[1.2rem] border-[1px] border-grey rounded"
          />
        </div>
        <div className="w-full flex">
          <input type="checkbox" id="remember-me" className="mx-1" />
          <label htmlFor="remember-me">Remember me</label>
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
