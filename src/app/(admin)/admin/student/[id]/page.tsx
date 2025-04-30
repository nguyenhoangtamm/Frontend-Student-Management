import StudentInfo from "./student-info";

export default function page({ params }: { params: { id: string } }) {
  return (
    <StudentInfo id={Number(params.id)} />
  );
}
