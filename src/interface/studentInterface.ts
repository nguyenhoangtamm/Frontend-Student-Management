import { offCampus } from "./offCampusInterface";

export interface Student {
    id?: string;
    name: string;
    gender: string;
    avatar: string;
    status: string;
    classId: string;
    level: string;
    faculty: string;
    major: string;
    specialization: string;
    enrollmentDate: string;
    campus: string;
    educationType: string;
    course: string;
    offCampus:offCampus|undefined;
  }