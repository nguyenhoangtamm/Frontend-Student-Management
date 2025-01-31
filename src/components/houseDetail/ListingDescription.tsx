
interface ListingDescriptionProps {
  description: string;
}

export default function ListingDescription({ description }: ListingDescriptionProps) {
  return (
    <div className="description text-dark mt-3">
      <h4>{description}</h4>
      <p>🏠 2BR Apartment for rent in Phu Huu, Ho Chi Minh</p>
      <ul>
        <li>✔️ Quiet area, close to District 1 & 2</li>
        <li>✔️ 2 bedrooms, 2 bathrooms, 10th floor</li>
        <li>✔️ Fully furnished (*sofa not included)</li>
        <li>💰 Monthly rent: 10.5M VND (~ $410)</li>
        <li>📌 1-year contract, 2-month deposit</li>
      </ul>
    </div>
  );
}

