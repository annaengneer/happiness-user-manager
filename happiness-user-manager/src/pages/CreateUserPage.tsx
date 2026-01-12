import UserCreateForm from '../components/UserCreateForm/UserCreateForm';
import type { User } from '../types/user';

type Props = {
  onCreate: (user: User) => void;
};

export const CreateUserPage = ({ onCreate }: Props) => {
  return (
    <div>
      <h2>ユーザー新規作成ページ</h2>
      <UserCreateForm onCreate={onCreate} />
    </div>
  );
};
