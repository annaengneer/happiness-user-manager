import { useState } from 'react';
import { UserTable } from './UserTable';
import type { User } from '../types/user';

import './UserPage.css';

type StudentSortKey = 'studyMinutes' | 'score' | null;
type MentorSortKey = 'experienceDays' | null;

type SortOrder = 'asc' | 'desc';

type Props = {
  users: User[];
};

export const UserPage = ({ users }: Props) => {
  const [tab, setTab] = useState<'all' | 'student' | 'mentor'>('all');
  const [sortKey, setSortKey] = useState<StudentSortKey | MentorSortKey | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleSortkeyChange = (value: string) => {
    if (value === '') {
      setSortKey(null);
    } else if (
      tab === 'student' &&
      (value === 'studyMinutes' || value === 'score')
    ) {
      setSortKey(value);
    } else if (tab === 'mentor' && value === 'experienceDays') {
      setSortKey(value);
    }
  };

  const filterUsers =
    tab === 'all' ? users : users.filter((u) => u.role === tab);

  const sortUser = (users: User[]) => {
    if (!sortKey) return users;

    return [...users].sort((a, b) => {
      if (a.role === 'student' && b.role === 'student') {
        if (sortKey === 'studyMinutes' || sortKey === 'score') {
          return sortOrder === 'asc'
            ? a[sortKey] - b[sortKey]
            : b[sortKey] - a[sortKey];
        }
      }

      if (a.role === 'mentor' && b.role === 'mentor') {
        if (sortKey === 'experienceDays') {
          return sortOrder === 'asc'
            ? a.experienceDays - b.experienceDays
            : b.experienceDays - a.experienceDays;
        }
      }
      return 0;
    });
  };

  const sortedUsers = sortUser(filterUsers);

  return (
    <>
      <div className="tab-buttons">
        <button
          className={tab === 'all' ? 'active' : ''}
          onClick={() => setTab('all')}
        >
          全員
        </button>

        <button
          className={tab === 'student' ? 'active' : ''}
          onClick={() => setTab('student')}
        >
          生徒
        </button>

        <button
          className={tab === 'mentor' ? 'active' : ''}
          onClick={() => setTab('mentor')}
        >
          メンター
        </button>
      </div>
      <div>
        {tab !== 'all' && (
          <div className="sort-controls">
            <select
              value={sortKey ?? ''}
              onChange={(e) => handleSortkeyChange(e.target.value)}
            >
              <option value="">並び替え項目</option>

              {tab === 'student' && (
                <>
                  <option value="studyMinutes">勉強時間</option>
                  <option value="score">ハピネススコア</option>
                </>
              )}

              {tab === 'mentor' && (
                <option value="experienceDays">実務経験日数</option>
              )}
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              disabled={!sortKey}
            >
              <option value="asc">昇順</option>
              <option value="desc">降順</option>
            </select>
          </div>
        )}
      </div>
      <UserTable users={sortedUsers} />
    </>
  );
};
