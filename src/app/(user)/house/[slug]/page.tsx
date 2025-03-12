import PropertyPage from "@/components/houseDetail/PropertyPage";

export default async function House({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  console.log("slug", slug);
  return <PropertyPage slug={slug} />;
}