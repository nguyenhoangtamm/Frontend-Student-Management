import { offCampus } from "./offCampusInterface";

export interface Student {
  code?: string;
  fullName: string;
  gender: string;
  avatar: string;
  status: string;
  className: string;
  level: string;
  faculty: string;
  major: string;
  campus: string;
  educationType: string;
  course: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  birthPlace: string;
  email: string;
  residenceStatus: number;
  offCampus: offCampus | undefined;
  provinceId: number;
  districtId: number;
  wardId: number;
  classId: number;
  majorId: number;
  contractStatus: number;
  academicYear: string;

}
