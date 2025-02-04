'use client';
import { useState } from "react";

interface ProfileEditProps {
  student: {
    id: string;
    name: string;
    email: string;
    phone: string;
    major: string;
  };
  onSave: (student: any) => void;
  onCancel: () => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ student, onSave, onCancel }) => {
  const [formData, setFormData] = useState(student);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Chỉnh sửa thông tin</h5>
        <div className="mb-3">
          <label className="form-label">Họ và tên</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Điện thoại</label>
          <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Ngành học</label>
          <input type="text" className="form-control" name="major" value={formData.major} onChange={handleChange} />
        </div>
        <button className="btn btn-success me-2" onClick={() => onSave(formData)}>Lưu</button>
        <button className="btn btn-secondary" onClick={onCancel}>Hủy</button>
      </div>
    </div>
  );
};

export default ProfileEdit;
