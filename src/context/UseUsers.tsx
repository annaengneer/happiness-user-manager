import { useContext } from 'react';
import { userContext } from './userContext';

export const useUsers = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error('useUsers must be used within UserProvider');
  }
  return context;
};
