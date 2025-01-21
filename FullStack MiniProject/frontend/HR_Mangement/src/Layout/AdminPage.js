import React from 'react';
import AdminComp from '../Components/AdminComp';

const AdminPage = () => {
  const loggedInEmail = 'admin@gmail.com'; // Email for logged-in admin

  return <AdminComp loggedInEmail={loggedInEmail} />;
};

export default AdminPage;
