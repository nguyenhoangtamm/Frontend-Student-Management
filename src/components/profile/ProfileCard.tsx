// import Image from "next/image";
import { FaUser } from "react-icons/fa6";

interface ProfileCardProps {
  student: {
    id?: string;
    name: string;
    gender: string;
    avatar: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ student }) => {
  return (
    <div className="text-center">
      {/* <Image
          src={student.avatar}
          className="rounded-circle border"
          alt="Avatar"
          width={120}
          height={120}
          objectFit="cover"
        /> */}
      <FaUser className="text-secondary" size={100} />
      <p className="mt-2">
        <strong>MSSV:</strong>{" "}
        <span className="text-primary">{student.id}</span>
      </p>
      <p>
        <strong>Họ tên:</strong>{" "}
        <span className="text-primary">{student.name}</span>
      </p>
      <p>
        <strong>Giới tính:</strong> {student.gender}
      </p>
    </div>
  );
};

export default ProfileCard;
