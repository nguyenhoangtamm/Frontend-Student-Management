'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import ResidenceStatus from './ResidenceStatus';
import { StudentProfileBodyType } from '@/schemaValidations/profile.schema';

export default function OffCampusInfo({ student }: { student: StudentProfileBodyType }) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/edit-off-campus?`);
  };

  return (
    <div className='mt-4 row'>
      <h5 className='fw-bold'>Thông tin ngoại trú</h5>
      <hr />

      <ResidenceStatus  student={student} />
      <div className='text-center mt-3'>
        <Button onClick={handleEdit}>
          {student.offCampus ? 'Chỉnh sửa' : 'Khai báo thông tin ngoại trú'}
        </Button>
      </div>
    </div>
  );
}
