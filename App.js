import React, { useEffect, useState } from 'react';
import { AuthProvider } from './src/Context/AuthContext';
import AppNav from './src/Navigation/AppNav';
import { UsersProvider } from './src/Context/UserContext';
export default function App() {


  return (
    <AuthProvider>
      <UsersProvider>
        <AppNav />
      </UsersProvider>
    </AuthProvider>
  );
}
