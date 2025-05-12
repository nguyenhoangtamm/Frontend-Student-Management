'use client'
import { useNotificationById } from '@/services/hooks/useNotification';
import React from 'react';

interface InfoRowProps {
    label: string;
    value: string | number | null | undefined;
}
const notificationTypes = [
    { id: 1, name: 'Thông báo' },
    { id: 2, name: 'Cảnh báo' },
    { id: 3, name: 'Khuyến cáo' },
    { id: 4, name: 'Thông báo khẩn' },
]

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
    <div>
        <span className="font-medium">{label}:</span>{' '}
        <span className="text-gray-700">{value || 'N/A'}</span>
    </div>
);

export default function NotificationInfo({ id }: { id: number }) {
    const { data } = useNotificationById({
        id: Number(id),
        enabled: Boolean(id),
    });

    const notificaitonDetails = [
        { label: 'Mã thông báo', value: data?.id },
        { label: 'Tiêu đề', value: data?.title },
        { label: 'Lượt xem', value: data?.views },
        { label: 'Đã gửi', value: data?.send ? 'Yes' : 'No' },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Dormitory Management: Dormitory</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border">
                <h2 className="text-lg font-semibold border-b pb-4 mb-6">Thông tin ký túc xá</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {notificaitonDetails.map((detail, index) => (
                        <InfoRow key={index} label={detail.label} value={detail.value} />
                    ))}

                </div>
                <div className="mt-6">
                    <h4 className="font-medium mb-2">Loại thông báo:</h4>
                    <span className="text-gray-700">
                        {notificationTypes.find((type) => type.id === data?.type)?.name || 'N/A'}
                    </span>
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
