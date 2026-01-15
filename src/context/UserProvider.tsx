import { UserList as INITIAL_USERS } from '../constants/UserList';
import type { User } from '../types/user';
import React, { useState } from 'react';
import { userContext } from './userContext';

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const addUser = (newUser: User) => {
    setUsers((prev) => [...prev, newUser]);
  };
  return (
    <userContext.Provider value={{ users, addUser }}>
      {children}
    </userContext.Provider>
  );
};
