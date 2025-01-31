import PropertyPage from "@/components/houseDetail/PropertyPage";

const houseData = {
  name: "House 2",
  address: "456 Elm St",
  price: "$1200",
  image: "house2.jpg",
  description: "A cozy house with a big garden.",
  lat: 34.0522,
  lon: -118.2437,
};

export default async function House({
  params,
}: {
  params: Promise<{ houseid: string }>
}) {
  const { houseid } = await params;
  houseData.name=houseid+ houseData.name;
  console.log(houseData);
  return <PropertyPage house={houseData} />;
}