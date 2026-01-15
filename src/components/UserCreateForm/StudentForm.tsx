import './UserCreateForm.css';

export type StudentForm = {
  studyMinutes: string;
  taskCode: string;
  studyLangs: string;
  score: string;
};

type Props = {
  value: StudentForm;
  onChange: (key: keyof StudentForm, value: string) => void;
};
export const StudentForm = ({ value, onChange }: Props) => (
  <>
    <div className="form-row">
      <label>勉強時間</label>
      <input
        value={value.studyMinutes}
        onChange={(e) => onChange('studyMinutes', e.target.value)}
      />
    </div>
    <div className="form-row">
      <label>課題番号</label>
      <input
        value={value.taskCode}
        onChange={(e) => onChange('taskCode', e.target.value)}
      />
    </div>

    <div className="form-row">
      <label>勉強中の言語</label>
      <input
        value={value.studyLangs}
        onChange={(e) => onChange('studyLangs', e.target.value)}
      />
    </div>
    <div className="form-row">
      <label>ハピネススコア</label>
      <input
        value={value.score}
        onChange={(e) => onChange('score', e.target.value)}
      />
    </div>
  </>
);
