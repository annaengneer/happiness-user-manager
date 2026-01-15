import type { User } from '../types/user';

type Props = {
  users: User[];
};

export const UserTable = ({ users }: Props) => {
  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>ロール</th>
              <th>メール</th>
              <th>年齢</th>
              <th>郵便番号</th>
              <th>電話番号</th>
              <th>趣味</th>
              <th>URL</th>
              <th>勉強時間</th>
              <th>課題番号</th>
              <th>勉強言語</th>
              <th>ハピネススコア</th>
              <th>実務経験日数</th>
              <th>現場で使っている言語</th>
              <th>担当開始課題</th>
              <th>担当終了課題</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.postCode}</td>
                <td>{user.phone}</td>
                <td>{user.hobbies.join(', ')}</td>
                <td>
                  <a href={user.url} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>

                {user.role === 'student' ? (
                  <>
                    <td>{user.studyMinutes}</td>
                    <td>{user.taskCode}</td>
                    <td>{user.studyLangs.join(', ')}</td>
                    <td>{user.score}</td>
                  </>
                ) : (
                  <>
                    <td />
                    <td />
                    <td />
                    <td />
                  </>
                )}
                {user.role === 'mentor' ? (
                  <>
                    <td>{user.experienceDays}</td>
                    <td>{user.useLangs.join(', ')}</td>
                    <td>{user.availableStartCode}</td>
                    <td>{user.availableEndCode}</td>
                  </>
                ) : (
                  <>
                    <td />
                    <td />
                    <td />
                    <td />
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
