import { Filter } from "lucide-react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import FilterStudent from "./FilterStudent";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3 justify-end">
      <FilterStudent />

      <input
        type="text"
        placeholder="Search students..."
        className="w-full outline-none"
      />
      <FaSearch className="text-gray-500" />
    </div>
  );
};

export default SearchBar;
