'use client';
import React, { useState } from 'react';

import {
  AppstoreOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { Button, Divider, Menu, Switch } from 'antd';
import type { GetProp, MenuProps } from 'antd';
import { Home, MenuIcon } from 'lucide-react';
import Link from 'antd/es/typography/Link';
import { useRouter } from 'next/navigation';
import { useLogoutMutation } from '@/services/hooks/useAuth';

type MenuTheme = GetProp<MenuProps, 'theme'>;

type MenuItem = GetProp<MenuProps, 'items'>[number];
const items: MenuItem[] = [
  {
    key: '0',
    icon: <Home />,
    label: (
      <Link
        href='/dashboard'
        className='navbar-brand fw-bold fs-4 mb-3 me-auto m-2'
      >
        Trang chủ
      </Link>
    ),
  },
  {
    key: '1',
    icon: <InfoCircleOutlined />,
    label: <Link href='/profile'>Xem Thông Tin</Link>,
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: <Link href='/housing'>Tìm Nhà trọ</Link>,
  },
  {
    key: '3',
    icon: <CalendarOutlined />,
    label: <Link href='/profile'>Khai báo Ngoại trú</Link>,
  },
  {
    key: '4',
    icon: <AppstoreOutlined />,
    label: 'Luật pháp và quy định',
    children: [
      {
        key: '5',
        label: <Link href='https://vanban.chinhphu.vn/default.aspx?pageid=27160&docid=91415' target="_blank" rel="noopener noreferrer">Quy định pháp luật</Link>,
      },
      {
        key: '6',
        label: <Link href='https://www.dthu.edu.vn/dView.aspx?id=2&idmn=2' target="_blank" rel="noopener noreferrer">Quy định nhà trường</Link>,
      },
    ],
  },
  {
    key: '7',
    icon: <LinkOutlined />,
    label: 'Đăng xuất',
  },
];

const SideBarComponent: React.FC = () => {
  const logoutMutation = useLogoutMutation();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    if (!logoutMutation.isError) {
      router.push('/login');
    }
  };

  const [theme, setTheme] = useState<MenuTheme>('light');
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
      <nav
        className={` navbar navbar-expand-lg navbar-light bg-light align-items-start position-fixed d-flex flex-column `}
        style={{
          top: 100,
          left: isOpen ? 10 : -260,
          height: '40vh',
          width: '250px',
          zIndex: 1000,
          transition: 'ease 0.7s',
        }}
      >
        <Divider type='vertical' />
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren='Dark'
          unCheckedChildren='Light'
        />

        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          theme={theme}
          items={items}
          onClick={(item) => {
            if (item.key === '7') {
              handleLogout();
            }
          }}
        ></Menu>
      </nav>
      <Button
        className='position-fixed d-flex justify-content-center align-items-center'
        onClick={toggleNavbar}
        style={{
          top: 100,
          left: isOpen ? 260 : 10,
          transition: 'ease 0.7s',
          zIndex: 1000,
        }}
      >
        <MenuIcon />
      </Button>
    </>
  );
};

export default SideBarComponent;
