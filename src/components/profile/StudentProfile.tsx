import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import OffCampusInfo from "./OffCampusInfo";
import { StudentProfileBodyType } from "@/schemaValidations/profile.schema";

export default function StudentProfile({ data }: { data: StudentProfileBodyType }) {
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
    className: data.className,
    major: data.major,
    level: data.level,
    faculty: data.faculty,
    course: data.course,
    status: data.status,
    educationType: data.educationType
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
            <ProfileDetails student={academicInfo} title="Thông tin học vấn" />
          </div>
        </div>
        <div className="row">

          <OffCampusInfo student={data} />


        </div>
      </div>
    </div>
  );
}
