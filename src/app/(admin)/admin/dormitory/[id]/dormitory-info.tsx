'use client'
import { useDormitoryById } from '@/services/hooks/useDomitory';
import React from 'react';
import MapDormitory from './map';

interface InfoRowProps {
    label: string;
    value: string | number | null | undefined;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
    <div>
        <span className="font-medium">{label}:</span>{' '}
        <span className="text-gray-700">{value || 'N/A'}</span>
    </div>
);

export default function DormitoryInfo({ id }: { id: number }) {
    const { data } = useDormitoryById({
        id: Number(id),
        enabled: Boolean(id),
    });

    const dormitoryDetails = [
        { label: 'Mã ký túc xá', value: data?.id },
        { label: 'Tên ký túc xá', value: data?.name },
        { label: 'Địa chỉ', value: data?.address },
        { label: 'Phường/Xã', value: data?.wardId },
        { label: 'Quận/Huyện', value: data?.districtId },
        { label: 'Tỉnh/Thành phố', value: data?.provinceId },
        { label: 'Chủ sở hữu', value: data?.ownerName },
        { label: 'Số điện thoại', value: data?.phoneNumber },
        { label: 'Mô tả', value: data?.description },
        { label: 'Trạng thái', value: data?.status === 1 ? 'Hoạt động' : 'Không hoạt động' },
        { label: 'Địa chỉ đầy đủ', value: data?.fullAddress },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Dormitory Management: Dormitory</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border">
                <h2 className="text-lg font-semibold border-b pb-4 mb-6">Thông tin ký túc xá</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dormitoryDetails.map((detail, index) => (
                        <InfoRow key={index} label={detail.label} value={detail.value} />
                    ))}
                    <div>
                        <InfoRow label="Kinh độ" value={data?.longitude} />
                        <InfoRow label="Vĩ độ" value={data?.latitude} />
                    </div>

                </div>
                <h2>
                    <span className="font-medium">Bản đồ:</span>{' '}
                    <span className="text-gray-700">{data?.address}</span>
                </h2>
                <div>

                    {data && (
                        <MapDormitory
                            location={{
                                id: data.id,
                                name: data.name,
                                address: data.address,
                                wardId: data.wardId,
                                districtId: data.districtId,
                                provinceId: data.provinceId,
                                ownerName: data.ownerName,
                                phoneNumber: data.phoneNumber,
                                description: data.description || '',
                                fullAddress: data.fullAddress || '',
                                longitude: data.longitude?.toString() || '0',
                                latitude: data.latitude?.toString() || '0',
                            }}
                        />
                    )}
                </div>
                <div className="mt-6">
                    <h3 className="font-medium mb-2">Nội dung:</h3>
                    <div
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{ __html: data?.content || 'N/A' }}
                    />
                </div>
            </div>
        </div>
    );
}
