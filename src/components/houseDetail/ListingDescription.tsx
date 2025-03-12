interface ListingDescriptionProps {
  description: string;
  content: string;

}

export default function ListingDescription({
  description,content
}: ListingDescriptionProps) {
  
  return (
    <div className='description text-dark mt-3'>
      <h4>{description}</h4>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
