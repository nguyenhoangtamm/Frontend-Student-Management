import Main from './Main';

export default async function Notification({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const  {slug}  = await params;
  const stringSlug = slug;

  return <Main slug={stringSlug} />;
}
