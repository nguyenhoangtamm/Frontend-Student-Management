'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Modal } from 'antd';
import { Button } from '@/components/ui/button';
import { StudentField } from '@/constants/addEntity/studentFiel';
import { useCreateStudent } from '@/services/hooks/useStudent';
import { StudentCreateBody } from '@/schemaValidations/student.schema';

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
    console.log('studentData', studentData);
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
      >
        <form onSubmit={handleSubmit}>
          {dataType.map((data, key) =>
            (data.option ?? []).length > 0 ? (
              <select
                key={key}
                className='w-full p-2 border rounded-md mt-2'
                name={data.key}
              >
                <option value='' disabled selected>
                  {data.label}
                </option>
                {(data.option ?? []).map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                key={key}
                type='text'
                placeholder={data.label}
                name={data.key}
                className='w-full p-2 border rounded-md mt-2'
              />
            ),
          )}

          <div className='mt-4 flex justify-end'>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button className='ml-2' type='submit' disabled={isPending}>
              {isPending ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
