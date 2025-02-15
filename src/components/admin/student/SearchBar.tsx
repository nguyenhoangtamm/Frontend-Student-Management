import { Filter } from "lucide-react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3 justify-end">
      <FaSearch className="text-gray-500" />
      <input
        type="text"
        placeholder="Search students..."
        className="w-full outline-none"
      />
      <Button variant="outline" className="flex items-center gap-2">
        <Filter size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
