import { FaSearch } from "react-icons/fa";
import FilterNotification from "./Filter";


const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3 justify-end">
      <FilterNotification/>

      <input
        type="text"
        placeholder="Search Notification..."
        className="w-full outline-none"
      />
      <FaSearch className="text-gray-500" />
    </div>
  );
};

export default SearchBar;
