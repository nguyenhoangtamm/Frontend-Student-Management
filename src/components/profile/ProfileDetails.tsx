import { Student } from "@/interface/studentInterface";

interface ProfileDetailsProps {
  title: string;
  student: Student;
}


const ProfileDetails: React.FC<ProfileDetailsProps> = ({ student, title }) => {
  console.log(student);
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
                <span>{student.status}</span>
              </p>
            )}
            {student.className && (
              <p>
                <strong>Lớp học:</strong>{" "}
                <span>{student.className}</span>
              </p>
            )}
            {student.level && (
              <p>
                <strong>Bậc đào tạo:</strong>{" "}
                <span>{student.level}</span>
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
                <span>{student.educationType}</span>
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
                <span>{student.course}</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
