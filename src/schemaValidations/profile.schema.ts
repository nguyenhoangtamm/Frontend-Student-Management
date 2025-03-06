import { z } from "zod";

export const StudentProfileBody = z.object({
    code: z.string(),
    name: z.string(),
    gender: z.string(),
    avatar: z.string().url(),
    status: z.string(),
    classId: z.string(),
    level: z.string(),
    faculty: z.string(),
    educationType: z.string().nullable(),
    course: z.string(),
    phone: z.string(),
    address: z.string(),
    dateOfBirth: z.string(),
    birthPlace: z.string(),
    email: z.string().email(),
    offCampus: z.object({
        name: z.string(),
        address: z.string(),
        owner_name: z.string(),
        phone_number: z.string(),
        room: z.string(),
        image: z.string(),
        contract_start: z.string(),
        contract_end: z.string(),
        contract_status: z.string(),
        price: z.string(),
        services: z.array(
            z.object({
                name: z.string(),
                price: z.number(),
                unit: z.string(),
            })
        ),
    }),
});

export type StudentProfileBodyType = z.TypeOf<typeof StudentProfileBody>;
