import { StudentProfileBodyType } from '@/schemaValidations/profile.schema';
import React from 'react';

export default function ResidenceStatus({ student }: { student: StudentProfileBodyType }) {
  if (student.residenceStatus == 1) {
    return (
      <div className='m-1 col-md-3' style={{ padding: '10px' }}>
        Bạn đang ở ký túc xá
      </div>
    );
  }
  // if (student.residenceStatus == 2) {
  //   return (
  //     <div className='m-1 col-md-3' style={{ padding: '10px' }}>
  //       Bạn đang ở nhà trọ
  //     </div>
  //   );
  // }
  if (student.residenceStatus == 3) {
    return (
      <div className='m-1 col-md-3' style={{ padding: '10px' }}>
        Bạn đang ở nhà riêng
      </div>
    );
  }
  return (
    <>
      {student.offCampus ? (
        <>
          <div className='m-1 col-md-3' style={{ padding: '10px' }}>
            Bạn đang ở nhà trọ
          </div>
          <div className='m-1 col-md-9' style={{ flex: 2, padding: '10px' }}>
            <div className='row'>
              <h5>Thông tin nơi ở</h5>
              <hr />
              <div className='col-md-6'>
                <p>
                  <strong>Tên nhà trọ:</strong>{' '}
                  <span >{student.offCampus?.name}</span>
                </p>
                <p>
                  <strong>Chủ trọ:</strong>{' '}
                  <span >{student.offCampus?.ownerName}</span>
                </p>
                <p>
                  <strong>Số điện thoại:</strong>{' '}
                  <span >{student.offCampus?.phoneNumber}</span>
                </p>
              </div>
              <div className='col-md-6'>
                <p>
                  <strong>Địa chỉ:</strong>{' '}
                  <span >{student.offCampus?.address}</span>
                </p>
                <p>
                  <strong>Phòng:</strong>{' '}
                  <span >{student.offCampus?.room}</span>
                </p>
                <p>
                  <strong>Trạng thái:</strong>{' '}
                  <span >
                    {student.offCampus?.contractStatus}
                  </span>
                </p>
              </div>
            </div>

            <hr />
            <div className='row'>
              <h5>Chi phí sinh hoạt</h5>
              <hr />
              <div>
                <p>
                  <strong>Giá phòng:</strong>{' '}
                  <span >{student.offCampus?.price} VNĐ/tháng</span>
                </p>
              </div>
              {student.offCampus?.services?.map((service: { name: string; price: number; unit: string }, index: number) => (
                <div className='col-md-6' key={index}>
                  <p>
                    <strong>{service.name}:</strong>{' '}
                    <span >
                      {service.price} VNĐ/{service.unit}
                    </span>
                  </p>
                </div>
              ))}
            </div>


          </div>
        </>
      ) : (
        <div>Chưa khai báo thông tin ngoại trú</div>
      )}
    </>
  );
}
