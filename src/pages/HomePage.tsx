import { Link } from 'react-router-dom';
import { UserPage } from '../components/UserPage';
import { UseUsers } from '../context/UseUsers';

export const HomePage = () => {
  const { users } = UseUsers();
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
