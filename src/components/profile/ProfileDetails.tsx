interface ProfileDetailsProps {
    student: {
      status: string;
      classId: string;
      level: string;
      faculty: string;
      major: string;
      specialization: string;
      enrollmentDate: string;
      campus: string;
      educationType: string;
      course: string;
    };
  }
  
  const ProfileDetails: React.FC<ProfileDetailsProps> = ({ student }) => {
    return (
      <div>
        <h5 className="fw-bold">Thông tin học vấn</h5>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p><strong>Trạng thái:</strong> <span className="text-primary">{student.status}</span></p>
            <p><strong>Lớp học:</strong> <span className="text-primary">{student.classId}</span></p>
            <p><strong>Bậc đào tạo:</strong> <span className="text-primary">{student.level}</span></p>
            <p><strong>Khoa:</strong> {student.faculty}</p>
            <p><strong>Chuyên ngành:</strong> {student.specialization}</p>
          </div>
          <div className="col-md-6">
            <p><strong>Ngày vào trường:</strong> <span className="text-primary">{student.enrollmentDate}</span></p>
            <p><strong>Cơ sở:</strong> {student.campus}</p>
            <p><strong>Loại hình đào tạo:</strong> <span className="text-primary">{student.educationType}</span></p>
            <p><strong>Ngành:</strong> {student.major}</p>
            <p><strong>Khóa học:</strong> <span className="text-primary">{student.course}</span></p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileDetails;
  