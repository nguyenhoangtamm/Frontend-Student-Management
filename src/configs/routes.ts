export const routes = {
  manage: {
    dashboard: '/dashboard',
    users: '/manage/users',
    roles: '/manage/roles',
    configs: '/manage/configs',
    logging: '/manage/logging',
    areas: '/manage/areas',
    devices: '/manage/devices',
    deviceTracking: '/manage/device-tracking',
    attendanceHistory: '/manage/attendance-history',
    attendanceTracking: '/manage/attendance-tracking',
  },
  user: {
    dashboard: '/dashboard',
    users: '/manage/users',
  },
  admin: {
    overview: '/admin',
    dashboard: 'admin/dashboard',
  },
  auth: {
    login: '/login',
    logout: '/logout',
    default: '/',
  },
};
