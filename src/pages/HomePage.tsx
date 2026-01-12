import { Link } from 'react-router-dom';
import { UserPage } from '../components/UserPage';
import type { User } from '../types/user';

type Props = {
  users: User[];
};

export const HomePage = ({ users }: Props) => {
  return (
    <>
      <div className="home-header">
        <Link to="/create">
          <button>＋ 新規ユーザ作成</button>
        </Link>
      </div>

      <UserPage users={users} />
    </>
  );
};
