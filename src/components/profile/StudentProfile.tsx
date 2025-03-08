import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import OffCampusInfo from "./OffCampusInfo";
import { Student } from "@/interface/studentInterface";

export default function StudentProfile({ data }: { data: Student }) {
  const personalInfo = {
    name: data.name,
    phone: data.phone,
    address: data.address,
    dateOfBirth: data.dateOfBirth,
    birthPlace: data.birthPlace,
    email: data.email,
  };

  const academicInfo = {
    code: data.code,
    classId: data.classId,
    major: data.major,
    level: data.level,
    faculty: data.faculty,
    course: data.course,
    status: data.status,
  };
 
  return (
    <div className="container mt-4">
      <div className="card p-3">
        <div className="row">
          <div className="col-md-3">
            <ProfileCard student={data} />
          </div>
          <div className="col-md-9">
            <ProfileDetails student={personalInfo} title="Thông tin cá nhân" />
          </div>
          <div className="col-md-9">
            <ProfileDetails student={academicInfo} title="Thông tin học vấn"/>
          </div>
        </div>
        <div className="row">
          <OffCampusInfo offCampus={data.offCampus} residenceStatus={data.residenceStatus} />
        </div>
      </div>
    </div>
  );
}
