import { z } from 'zod';

export const StudentProfileBody = z.object({
  code: z.string(),
  name: z.string(),
  gender: z.string(),
  avatar: z.string(),
  status: z.string(),
  className: z.string(),
  level: z.string(),
  faculty: z.string(),
  educationType: z.string().nullable(),
  course: z.string(),
  phone: z.string(),
  address: z.string(),
  dateOfBirth: z.string(),
  birthPlace: z.string(),
  email: z.string().email(),
  major: z.string(),
  residenceStatus: z.number(),
  offCampus: z.object({
    name: z.string(),
    address: z.string(),
    ownerName: z.string(),
    phoneNumber: z.string(),
    room: z.string(),
    price: z.string(),
    contractStatus: z.string(),
    services: z.array(
      z.object({
        name: z.string(),
        price: z.number(),
        unit: z.string(),
      }),
    ),
  }).nullable(),
});

export type StudentProfileBodyType = z.TypeOf<typeof StudentProfileBody>;
