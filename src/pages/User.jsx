import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { updateUserName } from '../actions';
import { Layout } from '../components/Layout';
import { Greeting } from '../components/Greetings';
import { AccountList } from '../components/AccountList';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';

export function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jwt, isLoggedIn, firstName, lastName } = useSelector(
    (state) => state.user
  );
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const dispatchToStore = (data) => {
    const { firstName, lastName } = data.body;
    dispatch(updateUserName(firstName, lastName));
  };
  const [data, error] = useFetch(
    'http://localhost:3001/api/v1/user/profile',
    options,
    dispatchToStore
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return (
    <Layout bgColor="dark">
      {error ? (
        <Error message={error.message} />
      ) : !firstName && !lastName ? (
        <Loading />
      ) : (
        <>
          <Greeting user={{ firstName, lastName }} />
          <AccountList />
        </>
      )}
    </Layout>
  );
}
