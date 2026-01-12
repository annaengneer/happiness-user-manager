import './UserCreateForm.css';

type Role = 'student' | 'mentor';

type Props = {
  value: Role;
  onChange: (role: Role) => void;
};

export const RoleSwitch = ({ value, onChange }: Props) => {
  return (
    <div className="form-row role-row">
      <label>種別</label>

      <div className="role-switch">
        <label className={value === 'student' ? 'active' : ''}>
          <input
            type="radio"
            value="student"
            checked={value === 'student'}
            onChange={() => onChange('student')}
          />
          生徒
        </label>

        <label className={value === 'mentor' ? 'active' : ''}>
          <input
            type="radio"
            value="mentor"
            checked={value === 'mentor'}
            onChange={() => onChange('mentor')}
          />
          メンター
        </label>
      </div>
    </div>
  );
};
