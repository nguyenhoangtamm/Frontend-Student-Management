import DormitoryInfo from "./dormitory-info";

export default function page({ params }: { params: { id: string } }) {
  return (
    <DormitoryInfo id={Number(params.id)} />
  );
}
