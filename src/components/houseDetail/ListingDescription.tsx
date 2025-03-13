interface ListingDescriptionProps {
  description: string;
  content: string;
}

export default function ListingDescription({
  description,
  content,
}: ListingDescriptionProps) {
  return (
    <div className='mt-4 p-4 bg-white shadow rounded-lg flex flex-row'>
      <div className='mr-4 w-full'>
        <h3>Description</h3>
        <h4>{description}</h4>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
