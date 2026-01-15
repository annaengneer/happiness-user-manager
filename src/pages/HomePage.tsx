import { Link } from 'react-router-dom';
import { UserPage } from '../components/UserPage';
import { useUsers } from '../context/useUsers';

export const HomePage = () => {
  const { users } = useUsers();
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
