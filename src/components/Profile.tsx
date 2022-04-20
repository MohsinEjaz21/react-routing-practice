import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Profile() {
  const auth: any = useAuth();
  const navigate = useNavigate();

  function handleLogout(e: any) {
    e.preventDefault();
    auth.logout();
    navigate('/');
  }

  return (
    <>
      <h1>Welcome {auth.user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile