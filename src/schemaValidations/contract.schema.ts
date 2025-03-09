import { z } from "zod";
import { Dormitory } from "./dormitory.schema";

export const ContractSchema = z.object({
    dormitory: Dormitory,
    price: z.string(),
    room: z.string(),
    status: z.string(),
});
export type ContractType = z.TypeOf<typeof ContractSchema>;
