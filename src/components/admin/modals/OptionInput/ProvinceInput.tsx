import { useProvinces } from '@/services/hooks/useProvince';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ProvinceInput({
  fieldKey,
  label,
}: {
  fieldKey: string;
  label: string;
}) {
  const [options, setOptions] = useState<{ name: string; id: number }[]>([]);
  const { data } = useProvinces();
  console.log('data', data);
  useEffect(() => {
    if (data) {
      setOptions(data.provinces);
    }
  }, [data]);
  return (
    <select
      className='w-full p-3 border rounded-md focus:ring-2 focus:ring-admin-theme focus:border-admin-theme'
      name={fieldKey}
      required
      defaultValue=''
    >
      <option value='' disabled>
        Select {label}
      </option>
      {(options ?? []).map((opt, index) => (
        <option key={index} value={opt.id}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}
