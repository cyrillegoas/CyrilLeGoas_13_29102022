import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Greeting } from '../components/Greetings';
import { AccountList } from '../components/AccountList';

export function User() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return (
    <Layout bgColor="dark">
      <Greeting />
      <AccountList />
    </Layout>
  );
}
