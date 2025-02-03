import PropertyPage from "@/components/houseDetail/PropertyPage";

export default async function House({
  params,
}: {
  params: Promise<{ houseid: number }>
}) {
  const { houseid } = await params;

  return <PropertyPage houseId={houseid} />;
}