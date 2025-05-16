'use client';
import { useReadNotificationMutation } from '@/services/hooks/useNotification';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { IoMdNotificationsOutline } from 'react-icons/io';

interface Notification {
  id: number;
  title: string;
  slug: string;
  isRead: boolean;
}
interface NotificationIconProps {
  notifications: Notification[];
}
export default function NotificationIcon({
  notifications,
}: NotificationIconProps) {
  const readNotification = useReadNotificationMutation();

  const router = useRouter();

  const handleReadNotification = async (id: number) => {
    await readNotification.mutate(id);
    router.push(`/notification/${id}`);
  }



  return (
    <div
      className='d-flex align-items-center me-4'
      style={{ cursor: 'pointer' }}
    >
      <Dropdown>
        <Dropdown.Toggle
          variant='light'
          className='d-flex align-items-center border-0'
        >
          <IoMdNotificationsOutline size={25} />
          <span className='text-secondary'>Thông báo</span>
          {/* Hiển thị số lượng thông báo chưa đọc */}
          {notifications.some(n => !n.isRead) && (
            <span
              style={{
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                fontSize: 12,
                width: 18,
                height: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 6,
              }}
            >
              {notifications.filter(n => !n.isRead).length}
            </span>
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            maxHeight: 300,
            overflowY: notifications.length > 5 ? 'auto' : 'visible',
            minWidth: 300,
          }}
        >
          {notifications.length === 0 ? (
            <Dropdown.Item disabled>Không có thông báo</Dropdown.Item>
          ) : (
            notifications.map((notification) => (
              <Dropdown.Item
                key={notification.id}
                style={{
                  fontWeight: notification.isRead ? 'normal' : 'bold',
                  backgroundColor: notification.isRead ? undefined : '#f0f8ff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                onClick={() => handleReadNotification(notification.id)}
              >
                {!notification.isRead && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'red',
                    }}
                  />
                )}
                {notification.title}
              </Dropdown.Item>
            ))
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
