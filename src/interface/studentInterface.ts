import { offCampus } from "./offCampusInterface";

export interface Student {
  code?: string;
  name: string;
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
}
