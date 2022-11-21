import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchCallback } from '../hooks/useFetchCallback';
import { useForm } from '../hooks/useForm';
import { Button } from './Button';
import { updateUserName } from '../actions';

export function GreetingEditor({ setEdit, user }) {
  const [values, handleChange] = useForm({ firstname: '', lastname: '' });
  const { jwt } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { fetchCall, data, error, setError } = useFetchCallback(
    'http://localhost:3001/api/v1/user/profile'
  );

  useEffect(() => {
    if (!data) return;
    const { firstName, lastName } = data.body;
    dispatch(updateUserName(firstName, lastName));
    setEdit(false);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        firstName: values.firstname,
        lastName: values.lastname,
      }),
    };
    if (values.firstname && values.lastname) fetchCall(options);
    else setError(new Error('Missing firstname or lastname'));
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 md:grid md:grid-cols-2 "
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstname" className="sr-only">
          firstname
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={values.firstname}
          onChange={handleChange}
          placeholder={user.firstName}
          className="p-[5px] text-[1.2rem] border-[1px] border-grey rounded w-[250px]"
        />

        <label htmlFor="lastname" className="sr-only">
          lastname
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={values.lastname}
          onChange={handleChange}
          placeholder={user.lastName}
          className="p-[5px] text-[1.2rem] border-[1px] border-grey rounded w-[250px]"
        />
        <Button
          isSubmit
          text="Save"
          className="md:w-[60%] md:justify-self-end"
        />
        <Button
          text="Cancel"
          onClick={() => setEdit(false)}
          className="md:w-[60%]"
          variant="danger"
        />
      </form>
      {error && <p className="text-red text-xs py-1">{error.message}</p>}
    </>
  );
}
