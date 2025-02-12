// components/Card.tsx
interface CardProps {
  title: string;
  value: number;
  percentage: number;
}

const Card = ({ title, value, percentage }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-60">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-green-500">{percentage}% ↑</p>
    </div>
  );
};

export default Card;
