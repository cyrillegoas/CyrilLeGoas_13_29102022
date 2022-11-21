import React from 'react';
import { Button } from './Button';

export function GreetingEditor({ setEdit, user }) {
  return (
    <form className="flex flex-col gap-4 md:grid md:grid-cols-2 ">
      <label htmlFor="firstname" className="sr-only">
        firstname
      </label>
      <input
        type="text"
        name="firstname"
        id="firstname"
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
        placeholder={user.lastName}
        className="p-[5px] text-[1.2rem] border-[1px] border-grey rounded w-[250px]"
      />
      <Button
        isSubmit
        text="Save"
        onClick={(e) => {
          e.preventDefault();
          console.log('Save');
        }}
        className="md:w-[60%] md:justify-self-end"
      />
      <Button
        text="Cancel"
        onClick={() => setEdit(false)}
        className="md:w-[60%]"
        variant="danger"
      />
    </form>
  );
}
