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
  name: z.string(),
  ownerName: z.string(),
  fullAddress: z.string(),
  address: z.string(),
  ward: z.string(),
  district: z.string(),
  province: z.string(),
  phoneNumber: z.string(),
  services: z.array(Service),
});
