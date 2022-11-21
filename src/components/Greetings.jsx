import React, { useState } from 'react';
import { GreetingEditor } from './GreetingsEditor';
import { Button } from './Button';

export function Greeting({ user }) {
  const [edit, setEdit] = useState(false);

  return (
    <section className="flex flex-col items-center gap-[1.35rem] pt-[1.35rem] pb-8">
      <h2 className="text-center text-white text-[2rem] font-bold">
        Welcome back
        <br />
        {!edit ? `${user.firstName} ${user.lastName}!` : null}
      </h2>
      {!edit ? (
        <Button isSubmit text="Edit Name" onClick={() => setEdit(true)} />
      ) : (
        <GreetingEditor setEdit={setEdit} user={user} />
      )}
    </section>
  );
}
