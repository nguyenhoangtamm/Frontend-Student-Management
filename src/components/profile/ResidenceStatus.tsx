import { offCampus } from '@/interface/offCampusInterface';
import React from 'react';

export default function ResidenceStatus({
  offCampus,
  residenceStatus,
}: {
  offCampus: offCampus | undefined;
  residenceStatus: number;
}) {
  if (residenceStatus == 1) {
    return (
      <div className='m-1 col-md-3' style={{ padding: '10px' }}>
        Bạn đang ở ký túc xá
      </div>
    );
  }
  if (residenceStatus == 2) {
    return (
      <div className='m-1 col-md-3' style={{ padding: '10px' }}>
        Bạn đang ở nhà trọ
      </div>
    );
  }
  return (
    <>
      {offCampus ? (
        <>
          <div className='m-1 col-md-9' style={{ flex: 2, padding: '10px' }}>
            <div className='row'>
                <h5>Thông tin nơi ở</h5>
                <hr />
              <div className='col-md-6'>
                <p>
                  <strong>Tên nhà trọ:</strong>{' '}
                  <span className='text-primary'>{offCampus?.name}</span>
                </p>
                <p>
                  <strong>Chủ trọ:</strong>{' '}
                  <span className='text-primary'>{offCampus?.ownerName}</span>
                </p>
                <p>
                  <strong>Số điện thoại:</strong>{' '}
                  <span className='text-primary'>{offCampus?.phoneNumber}</span>
                </p>
              </div>
              <div className='col-md-6'>
                <p>
                  <strong>Địa chỉ:</strong>{' '}
                  <span className='text-primary'>{offCampus?.address}</span>
                </p>
                <p>
                  <strong>Phòng:</strong>{' '}
                  <span className='text-primary'>{offCampus?.room}</span>
                </p>
                <p>
                  <strong>Trạng thái:</strong>{' '}
                  <span className='text-primary'>
                    {offCampus?.contractStatus}
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
                    <span className='text-primary'>{offCampus?.price} VNĐ/tháng</span>
                </p>
            </div>
              {offCampus?.services?.map((service, index) => (
                <div className='col-md-6' key={index}>
                  <p>
                    <strong>{service.name}:</strong>{' '}
                    <span className='text-primary'>
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
