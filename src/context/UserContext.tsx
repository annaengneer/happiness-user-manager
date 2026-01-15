import type { User } from '../types/user';
import { createContext } from 'react';

type userContextType = {
  users: User[];
  addUser: (user: User) => void;
};
export const userContext = createContext<userContextType | undefined>(
  undefined
);
