import './UserCreateForm.css';

export type MentorForm = {
  experienceDays: string;
  useLangs: string;
  availableStartCode: string;
  availableEndCode: string;
};

type Props = {
  value: MentorForm;
  onChange: (key: keyof MentorForm, value: string) => void;
};

export const MentorForm = ({ value, onChange }: Props) => (
  <>
    <div className="form-row">
      <label>実務経験</label>
      <input
        value={value.experienceDays}
        onChange={(e) => onChange('experienceDays', e.target.value)}
      />
    </div>
    <div className="form-row">
      <label>使用言語</label>
      <input
        value={value.useLangs}
        onChange={(e) => onChange('useLangs', e.target.value)}
      />
    </div>
    <div className="form-row">
      <label>担当開始課題</label>
      <input
        value={value.availableStartCode}
        onChange={(e) => onChange('availableStartCode', e.target.value)}
      />
    </div>
    <div className="form-row">
      <label>担当終了課題</label>
      <input
        value={value.availableEndCode}
        onChange={(e) => onChange('availableEndCode', e.target.value)}
      />
    </div>
  </>
);
