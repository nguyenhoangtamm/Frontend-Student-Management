'use client';

import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const UserProfile: React.FC = () => {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="light" className="d-flex align-items-center border-0">
        <div
          className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
          style={{ width: '32px', height: '32px', fontWeight: 'bold' }}
        >
          N
        </div>
        <span className="ms-2 text-secondary">Nguyễn Hoàng Tam</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/profile">Hồ sơ</Dropdown.Item>
        <Dropdown.Item href="#/logout">Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserProfile;
