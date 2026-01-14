import type { User } from '../types/user';
import { createContext } from 'react';

type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
};
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
