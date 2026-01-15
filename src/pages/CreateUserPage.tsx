import UserCreateForm from '../components/UserCreateForm/UserCreateForm';
import { useUsers } from '../context/useUsers';
import type { User } from '../types/user';

export const CreateUserPage = () => {
  const { addUser } = useUsers();
  const handleCreate = (user: User) => {
    addUser(user);
  };
  return (
    <div>
      <h2>ユーザー新規作成ページ</h2>
      <UserCreateForm onCreate={handleCreate} />
    </div>
  );
};

export default UserCreateForm;
