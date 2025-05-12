import { z } from 'zod';

export const ContractSchema = z.object({
  dormitoryId: z.number(),
  price: z.string(),
  room: z.string(),
  status: z.number(),
});
export type ContractType = z.TypeOf<typeof ContractSchema>;



export const SaveContractSchema = z.object({
  dormitoryId: z.number().optional(),
  price: z.string().optional(),
  room: z.string().optional(),
  status: z.number(),
});
export type SaveContractType = z.TypeOf<typeof SaveContractSchema>;