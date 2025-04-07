'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Modal } from 'antd';
import { Button } from '@/components/ui/button';
import { StudentField } from '@/constants/addEntity/studentFiel';
import { useCreateStudent } from '@/services/hooks/useStudent';
import { StudentCreateBody } from '@/schemaValidations/student.schema';
import OptionInput from './OptionInput';

interface IProps {
  name: string;
  dataType: StudentField[];
}
export default function AddModal({ name, dataType }: IProps) {
  const [open, setOpen] = useState(false);
  const { mutate: createStudent, isPending } = useCreateStudent();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const studentData = Object.fromEntries(formData);
    createStudent(studentData as StudentCreateBody);
  };
  return (
    <>
      <Button
        className='bg-admin-theme text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:opacity-90'
        onClick={() => setOpen(true)}
      >
        <Plus size={20} /> Add
      </Button>

      <Modal
        title={`Add New ${name}`}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
      >
        <form onSubmit={handleSubmit} className='p-4'>
          <div className='grid grid-cols-2 gap-6'>
            {dataType.map((data, key) =>
              data.option === true ? (
                <OptionInput key={data.key} fieldKey={data.key} label={data.label} />
              ) : (
                <div key={key} className='flex flex-col'>
                  <label className='text-sm font-medium mb-1'>
                    {data.label}
                  </label>
                  <input
                    type='text'
                    placeholder={`Enter ${data.label}`}
                    name={data.key}
                    className='w-full p-3 border rounded-md focus:ring-2 focus:ring-admin-theme focus:border-admin-theme'
                  />
                </div>
              ),
            )}
          </div>

          <div className='mt-8 flex justify-end gap-4'>
            <Button
              onClick={() => setOpen(false)}
              variant='outline'
              className='px-6'
            >
              Cancel
            </Button>
            <Button
              className='px-6 bg-admin-theme hover:bg-admin-theme/90'
              type='submit'
              disabled={isPending}
            >
              {isPending ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
