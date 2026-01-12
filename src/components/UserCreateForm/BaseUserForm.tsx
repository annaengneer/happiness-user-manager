import './UserCreateForm.css';

export type BaseForm = {
  name: string;
  email: string;
  age: string;
  postCode: string;
  phone: string;
  url: string;
  hobbies: string;
};

type Props = {
  value: BaseForm;
  onChange: (key: keyof BaseForm, value: string) => void;
};

export const BaseUserForm = ({ value, onChange }: Props) => (
  <>
    <div className="form-row">
      <label>名前</label>
      <input
        value={value.name}
        onChange={(e) => onChange('name', e.target.value)}
      />
    </div>

    <div className="form-row">
      <label>メールアドレス</label>
      <input
        value={value.email}
        onChange={(e) => onChange('email', e.target.value)}
      />
    </div>

    <div className="form-row">
      <label>年齢</label>
      <input
        value={value.age}
        onChange={(e) => onChange('age', e.target.value)}
      />
    </div>

    <div className="form-row">
      <label>郵便番号</label>
      <input
        value={value.postCode}
        onChange={(e) => onChange('postCode', e.target.value)}
      />
    </div>

    <div className="form-row">
      <label>電話番号</label>
      <input
        value={value.phone}
        onChange={(e) => onChange('phone', e.target.value)}
      />
    </div>

    <div className="form-row">
      <label>URL</label>
      <input
        value={value.url}
        onChange={(e) => onChange('url', e.target.value)}
      />
    </div>

    <div className="form-row">
      <label>趣味</label>
      <input
        value={value.hobbies}
        onChange={(e) => onChange('hobbies', e.target.value)}
      />
    </div>
  </>
);
