interface ProfileDetailsProps {
  title: string;
  student: {
    code?: string;
    name?: string;
    status?: string;
    classId?: string;
    level?: string;
    faculty?: string;
    major?: string;
    campus?: string;
    educationType?: string;
    course?: string;
    phone?: string;
    address?: string;
    dateOfBirth?: string;
    birthPlace?: string;
    email?: string;
  };
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ student, title }) => {
  return (
    <div>
      <h5 className="fw-bold">{title}</h5>
      <hr />
      {title === "Thông tin cá nhân" ? (
        <div className="row">
          <div className="col-md-6">
            {student.code && (
              <p>
                <strong>Mã sinh viên:</strong> {student.code}
              </p>
            )}
            {student.name && (
              <p>
                <strong>Họ và tên:</strong> {student.name}
              </p>
            )}
            {student.dateOfBirth && (
              <p>
                <strong>Ngày sinh:</strong> {student.dateOfBirth}
              </p>
            )}
            {student.birthPlace && (
              <p>
                <strong>Nơi sinh:</strong> {student.birthPlace}
              </p>
            )}
            {student.phone && (
              <p>
                <strong>Số điện thoại:</strong> {student.phone}
              </p>
            )}
          </div>
          <div className="col-md-6">
            {student.email && (
              <p>
                <strong>Email:</strong> {student.email}
              </p>
            )}
            {student.address && (
              <p>
                <strong>Địa chỉ:</strong> {student.address}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            {student.status && (
              <p>
                <strong>Trạng thái:</strong>{" "}
                <span className="text-primary">{student.status}</span>
              </p>
            )}
            {student.classId && (
              <p>
                <strong>Lớp học:</strong>{" "}
                <span className="text-primary">{student.classId}</span>
              </p>
            )}
            {student.level && (
              <p>
                <strong>Bậc đào tạo:</strong>{" "}
                <span className="text-primary">{student.level}</span>
              </p>
            )}
            {student.faculty && (
              <p>
                <strong>Khoa:</strong> {student.faculty}
              </p>
            )}
          </div>
          <div className="col-md-6">
            {student.campus && (
              <p>
                <strong>Cơ sở:</strong> {student.campus}
              </p>
            )}
            {student.educationType && (
              <p>
                <strong>Loại hình đào tạo:</strong>{" "}
                <span className="text-primary">{student.educationType}</span>
              </p>
            )}
            {student.major && (
              <p>
                <strong>Ngành:</strong> {student.major}
              </p>
            )}
            {student.course && (
              <p>
                <strong>Khóa học:</strong>{" "}
                <span className="text-primary">{student.course}</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
