import NotificationInfo from "./notification-info";

export default function page({ params }: { params: { id: string } }) {
  return (
    <NotificationInfo id={Number(params.id)} />
  );
}
