import { useState } from 'react';
import type { Mentor, Student, User } from '../../types/user';
import { BaseUserForm, type BaseForm } from './BaseUserForm';
import { v4 as uuidv4 } from 'uuid';

import { StudentForm } from './StudentForm';
import { MentorForm } from './MentorForm';
import { RoleSwitch } from './RoleSwitch';

import './UserCreateForm.css';
import { useNavigate } from 'react-router-dom';

type Props = {
  onCreate: (user: User) => void;
};
const UserCreateForm = ({ onCreate }: Props) => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'mentor'>('student');

  const EmptyCheck = (obj: Record<string, string>) =>
    Object.values(obj).some((v) => !v.trim());
  const handleSubmit = () => {
    if (EmptyCheck(baseForm)) {
      alert('基本情報はすべて必須です');
      return;
    }

    if (role === 'student' && EmptyCheck(studentForm)) {
      alert('生徒情報はすべて必須です');
      return;
    }

    if (role === 'mentor' && EmptyCheck(mentorForm)) {
      alert('メンター情報はすべて必須です');
      return;
    }

    if (role === 'student') {
      const newStudent: Student = {
        id: uuidv4(),
        role: 'student',
        name: baseForm.name,
        email: baseForm.email,
        age: Number(baseForm.age),
        postCode: baseForm.postCode,
        phone: baseForm.phone,
        url: baseForm.url,
        hobbies: baseForm.hobbies.split(','),
        studyMinutes: Number(studentForm.studyMinutes),
        taskCode: Number(studentForm.taskCode),
        studyLangs: studentForm.studyLangs.split(','),
        score: Number(studentForm.score),
      };
      onCreate(newStudent);
    }
    if (role === 'mentor') {
      const newMentor: Mentor = {
        id: uuidv4(),
        role: 'mentor',
        name: baseForm.name,
        email: baseForm.email,
        age: Number(baseForm.age),
        postCode: baseForm.postCode,
        phone: baseForm.phone,
        url: baseForm.url,
        hobbies: baseForm.hobbies.split(','),
        experienceDays: Number(mentorForm.experienceDays),
        useLangs: mentorForm.useLangs.split(','),
        availableStartCode: Number(mentorForm.availableStartCode),
        availableEndCode: Number(mentorForm.availableEndCode),
      };
      onCreate(newMentor);
    }
    setBaseForm({
      name: '',
      email: '',
      age: '',
      postCode: '',
      phone: '',
      url: '',
      hobbies: '',
    });

    setStudentForm({
      studyMinutes: '',
      taskCode: '',
      studyLangs: '',
      score: '',
    });

    setMentorForm({
      experienceDays: '',
      useLangs: '',
      availableStartCode: '',
      availableEndCode: '',
    });
  };

  const [baseForm, setBaseForm] = useState({
    name: '',
    email: '',
    age: '',
    postCode: '',
    phone: '',
    url: '',
    hobbies: '',
  });

  const handleBaseFormChange = (key: keyof BaseForm, value: string) => {
    setBaseForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const [studentForm, setStudentForm] = useState({
    studyMinutes: '',
    taskCode: '',
    studyLangs: '',
    score: '',
  });

  const handleStudentFormChange = (key: keyof StudentForm, value: string) => {
    setStudentForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const [mentorForm, setMentorForm] = useState({
    experienceDays: '',
    useLangs: '',
    availableStartCode: '',
    availableEndCode: '',
  });

  const handleMentorFormChange = (key: keyof MentorForm, value: string) => {
    setStudentForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <div className="form">
        <RoleSwitch value={role} onChange={setRole} />

        <BaseUserForm value={baseForm} onChange={handleBaseFormChange} />

        {role === 'student' && (
          <StudentForm value={studentForm} onChange={handleStudentFormChange} />
        )}

        {role === 'mentor' && (
          <MentorForm value={mentorForm} onChange={handleMentorFormChange} />
        )}
        <div className="form-actions">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate('/')}
          >
            一覧に戻る
          </button>
          <button onClick={handleSubmit}>登録</button>
        </div>
      </div>
    </>
  );
};

export default UserCreateForm;
