import { z } from 'zod';

export const DormitoriesName = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  }),
);
export type DormitoriesNameType = z.infer<typeof DormitoriesName>;
export const Service = z.object({
  name: z.string(),
  price: z.number(),
  unit: z.string(),
});
export const Dormitory = z.object({
  id: z.number(),
  name: z.string(),
  ownerName: z.string(),
  address: z.string(),
  phoneNumber: z.string(),
  services: z.array(Service),
});
