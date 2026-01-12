import { useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { UserList as INITIAL_USERS } from './constants/UserList';
import type { User } from './types/user';

const App = () => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);

  const handleCreateUser = (newUser: User) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return <AppRouter users={users} onCreateUser={handleCreateUser} />;
};

export default App;
