import { Button } from "react-bootstrap";

const ViewMoreButton: React.FC = () => {
  return (
    <div className="mt-4 flex justify-center">
      <Button className="px-6 py-2 bg-purple-500 text-white rounded-full">
        View More
      </Button>
    </div>
  );
};

export default ViewMoreButton;
