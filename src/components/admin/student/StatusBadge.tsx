interface StatusBadgeProps {
  status: 'Active' | 'Down' | 'Pending';
}

const statusColors = {
  Active: 'bg-green-500 text-white',
  Down: 'bg-red-500 text-white',
  Pending: 'bg-purple-500 text-white',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
