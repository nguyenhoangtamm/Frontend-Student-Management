import { z } from 'zod';

export const offCampus = z.object({
  id: z.string().optional(),
  name: z.string(),
  address: z.string(),
  ownerName: z.string(),
  phoneNumber: z.string(),
  room: z.string(),
  contractStart: z.string(),
  contractEnd: z.string(),
  contractStatus: z.string(),
  price: z.string(),
  services: z
    .array(
      z.object({
        name: z.string(),
        price: z.number(),
        unit: z.string(),
      }),
    )
    .optional(),
});
