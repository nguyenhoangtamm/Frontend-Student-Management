import StudentFormInfo from "./StudentFormInfo";
import UserCard from "./UserCard";

const OwnerData = [
  { label: "Họ và tên", value: "Ramon Ridwan" },
  { label: "Giới tính", value: "Nam" },
  { label: "Email", value: "Ramonridwan@protonmail.com" },
  { label: "Số điện thoại", value: "0987654321" },
  { label: "Ngày sinh", value: "04/5/2023" },
  { label: "Địa chỉ", value: "123 Main St, Hanoi, Vietnam" }
];
const educationData = [
  { label: "Trạng thái", value: "Đang học", link: "#" },
  { label: "Lớp học", value: "002241480101B", link: "#" },
  { label: "Bậc đào tạo", value: "Đại học", link: "#" },
  { label: "Khoa", value: "Khoa Sư phạm Toán - Tin" },
  { label: "Chuyên ngành", value: "Khoa học máy tính" },
  { label: "Ngày vào trường", value: "04/5/2023", link: "#" },
  { label: "Cơ sở", value: "Cơ sở 1" },
  { label: "Loại hình đào tạo", value: "Chính Quy", link: "#" },
  { label: "Ngành", value: "Khoa học Máy tính" },
  { label: "Khóa học", value: "Khóa 2022", link: "#" },
];

  
const Student = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Student Management: Student</h1>
      <div className="flex flex-col  bg-gray-100">
        <div className="flex justify-center">
        <UserCard
          name="Ramon Ridwan"
          email="Ramonridwan@protonmail.com"
          imageUrl="/image.png"
        />
        </div>
        <br />
        <StudentFormInfo title="Owner Information" info={OwnerData} />
        <StudentFormInfo title="Education Information" info={educationData} />
      </div>
    </div>
  );
};

export default Student;
