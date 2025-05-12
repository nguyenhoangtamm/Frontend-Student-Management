'use client'
import { useNotificationById } from '@/services/hooks/useNotification';
import React from 'react';


const notificationTypes = [
    { id: 1, name: 'Thông báo' },
    { id: 2, name: 'Cảnh báo' },
    { id: 3, name: 'Khuyến cáo' },
    { id: 4, name: 'Thông báo khẩn' },
]



export default function NotificationInfo({ id }: { id: number }) {
    const { data } = useNotificationById({
        id: Number(id),
        enabled: Boolean(id),
    });



    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Notification Management: Notification</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border">
                <h2 className="text-lg font-semibold border-b pb-4 mb-6">Thông tin thông báo</h2>

                <div className="mt-6">
                   <h4>
                        <span className="text-gray-700">{data?.title || 'N/A'}</span>
                   </h4>
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
