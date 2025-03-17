'use client';

import { offCampus } from '@/interface/offCampusInterface';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import ResidenceStatus from './ResidenceStatus';

export default function OffCampusInfo({
  offCampus, residenceStatus
}: {
  offCampus: offCampus | undefined;
    residenceStatus: number;
}) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/edit-off-campus?`);
  };

  return (
    <div className='mt-4 row'>
      <h5 className='fw-bold'>Thông tin ngoại trú</h5>
      <hr />
    
      <ResidenceStatus offCampus={offCampus} residenceStatus={residenceStatus} />
      <div className='text-center mt-3'>
        <Button onClick={handleEdit}>
          {offCampus ? 'Chỉnh sửa' : 'Khai báo thông tin ngoại trú'}
        </Button>
      </div>
    </div>
  );
}
