import { z } from 'zod';

export const ContractSchema = z.object({
  dormitoryId: z.number().nullable(),
  price: z.string().nullable(),
  room: z.string().nullable(),
  status: z.number(),
});
export type ContractType = z.TypeOf<typeof ContractSchema>;



export const SaveContractSchema = z.object({
  dormitoryId: z.number().optional().nullable(),
  price: z.string().optional().nullable(),
  room: z.string().optional().nullable(),
  status: z.number(),
});
export type SaveContractType = z.TypeOf<typeof SaveContractSchema>;