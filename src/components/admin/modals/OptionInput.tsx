import ProvinceInput from './OptionInput/ProvinceInput';

export default function OptionInput({
  fieldKey,
  label,
}: {
  fieldKey: string;
  label: string;
}) {
  return (
    <div className='flex flex-col'>
      <label className='text-sm font-medium mb-1'>{label}</label>
      {fieldKey === 'provinceId' && (
        <ProvinceInput fieldKey={fieldKey} label={label} />
      )}
    </div>
  );
}
