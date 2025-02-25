"use client";
import { FaSearch } from "react-icons/fa";
import FilterTable from "./Filter";
import {LucideIcon } from "lucide-react";
interface Props {
  name: string;
  filters: IFilter[];

}
interface IFilter {
  id: string;
  label: string;
  icon: LucideIcon;
  option: string[];
}

export default function SearchBar({ name,filters }: Props) {
  return (
    <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3 justify-end">
      <FilterTable filter={filters} />
      <input
        type="text"
        placeholder={`Search ${name}...`}
        className="w-full outline-none"
      />
      <FaSearch className="text-gray-500" />
    </div>
  );
}
