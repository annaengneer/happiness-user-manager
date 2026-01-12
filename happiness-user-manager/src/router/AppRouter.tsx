import { Routes, Route } from 'react-router-dom';
import { CreateUserPage } from '../pages/CreateUserPage';
import type { User } from '../types/user';
import { HomePage } from '../pages/HomePage';

type Props = {
  users: User[];
  onCreateUser: (user: User) => void;
};

export const AppRouter = ({ users, onCreateUser }: Props) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage users={users} />} />
      <Route
        path="/create"
        element={<CreateUserPage onCreate={onCreateUser} />}
      />
    </Routes>
  );
};
