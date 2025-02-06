import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import OffCampusInfo from "./OffCampusInfo";
import { Student } from "@/interface/studentInterface";

export default function StudentProfile({ data }: { data: Student }) {
  return (
    <div className="container mt-4">
      <div className="card p-3">
        <div className="row">
          <div className="col-md-3">
            <ProfileCard student={data} />
          </div>
          <div className="col-md-9">
            <ProfileDetails student={data} />
          </div>
        </div>
        <div className="row">
          <OffCampusInfo offCampus={data.offCampus} />
        </div>
      </div>
    </div>
  );
}
