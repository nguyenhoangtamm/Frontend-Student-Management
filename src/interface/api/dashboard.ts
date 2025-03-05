import { fetchDashboard } from './../../services/api/studentApi';
export interface Dormitory {
    name: string;
    room: string;
    status: string;
    updated_at: string;
    image: string;
}

export interface Notification {
    title: string;
    slug: string;
    content: string;
    date: string;
    type: string;
}

export interface fetchDashboard {
    code: string;
    full_name: string;
    gender: string;
    date_of_birth: string;
    birthplace: string;
    faculty: string;
    email: string;
    avatar: string;
    unreadNotifications: number;
    dormitory: Dormitory;
    notifications: Notification[];
}