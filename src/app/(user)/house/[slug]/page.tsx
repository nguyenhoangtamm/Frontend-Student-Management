import PropertyPage from "@/components/houseDetail/PropertyPage";

export default async function House({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  return <PropertyPage slug={slug} />;
}