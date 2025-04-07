'use client';

import { useState } from 'react';
import { Filter, LucideIcon } from 'lucide-react';
import { Button } from 'antd';

interface Filter {
  id: string;
  label: string;
  icon: LucideIcon;
  option: string[];
}

interface FilterProps {
  filter: Filter[];
}

export default function FilterTable({ filter }: FilterProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    filter[0].id,
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOption, setIsOpenOption] = useState(false);
  const handleSelectFilter = (id: string) => {
    setSelectedFilter(id);
    setSelectedOption(null);
    setIsOpenOption(!isOpenOption);
  };
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpenOption(false);
  };
  return (
    <div className='relative'>
      {/* Nút mở bộ lọc */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-4 py-2  text-gray-700 rounded-lg hover:bg-gray-300'
        style={{ border: 'none' }}
      >
        <Filter size={18} />
      </Button>

      {/* Bộ lọc */}
      {isOpen && (
        <div className='absolute mt-2 w-80 bg-white shadow-lg rounded-xl p-4 z-50'>
          <h3 className='text-gray-700 font-semibold mb-3'>Add Filter</h3>
          <div className='grid grid-cols-2 gap-3'>
            {filter.map(({ id, label, icon: Icon, option }) => (
              <div key={id} className='relative min-width-36 '>
                <button
                  onClick={() => {
                    handleSelectFilter(id);
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 transition-all ${
                    selectedFilter === id
                      ? 'bg-purple-100 border-purple-500 text-purple-600'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                  style={{ minWidth: '9rem' }}
                >
                  <Icon size={20} />
                  <span className='mt-1 text-sm font-medium'>{label}</span>
                  {selectedFilter === id && selectedOption ? (
                    <span className='mt-1 text-sm font-medium'>
                      {selectedOption}
                    </span>
                  ) : null}
                </button>
                {selectedFilter === id && isOpenOption && (
                  <div className='absolute mt-2 w-40 bg-white shadow-lg rounded-xl p-2 z-10'>
                    <ul>
                      {option.map((item) => (
                        <li
                          key={item}
                          className='p-2 text-sm font-medium'
                          onClick={() => handleSelectOption(item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
