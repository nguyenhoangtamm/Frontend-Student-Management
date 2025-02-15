import Image from "next/image";
import { FaUser } from "react-icons/fa6";

interface UserCardProps {
  name: string;
  email: string;
  imageUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, imageUrl }) => {
  return (
    <div className="flex flex-col items-center bg-pink-50 p-6 rounded-2xl shadow-lg w-80">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden">
        {/* <Image src={imageUrl} alt={name} width={96} height={96} /> */}
        <FaUser className="w-24 h-24 text-gray-500" />
      </div>

      {/* Name & Email */}
      <h2 className="mt-4 text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500">{email}</p>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-red-600">
          Down
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-purple-700">
          Block User
        </button>
      </div>
    </div>
  );
};

export default UserCard;
