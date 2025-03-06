import { z } from "zod";
import { Dormitory } from "./dormitory.schema";

export const ContractSchema = z.object({
    dormitory: Dormitory,
    price: z.string(),
    room: z.string(),
    status: z.enum(["pending", "confirmed", "Active"]),
    contractStart: z.string(),
    contractEnd: z.string(),
});
export type ContractType = z.TypeOf<typeof ContractSchema>;
