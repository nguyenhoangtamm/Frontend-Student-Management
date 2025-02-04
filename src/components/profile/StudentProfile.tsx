import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import OffCampusInfo from "./OffCampusInfo";

interface Student {
  id: string;
  name: string;
  gender: string;
  avatar: string;
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
  offCampus: {
    address: string;
    district: string;
    city: string;
    landlord: string;
    landlordPhone: string;
  };
}

const studentData: Student = {
  id: "0022411792",
  name: "Nguyễn Hoàng Tam",
  gender: "Nam",
  avatar: "/avatar.jpg",
  status: "Đang học",
  classId: "002241480101B",
  level: "Đại học",
  faculty: "Khoa Sư phạm Toán - Tin",
  major: "Khoa học Máy tính",
  specialization: "Khoa học máy tính",
  enrollmentDate: "04/5/2023",
  campus: "Cơ sở 1",
  educationType: "Chính Quy",
  course: "Khóa 2022",
  offCampus: {
    address: "123 Đường Nguyễn Văn A",
    district: "Phường 3",
    city: "TP. Cao Lãnh",
    landlord: "Nguyễn Văn B",
    landlordPhone: "0912345678",
  },
};

const StudentProfile = () => {
  return (
    <div className="container mt-4">
      <div className="card p-3">
        <div className="row">
          <div className="col-md-3">
            <ProfileCard student={studentData} />
          </div>
          <div className="col-md-9">
            <ProfileDetails student={studentData} />
          </div>
        </div>
        <div className="row">
          <OffCampusInfo offCampus={studentData.offCampus} />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
