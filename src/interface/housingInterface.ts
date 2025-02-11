import * as z from 'zod';

export interface OriginHousing {
  id: number;
  name: string;
  address: string;
  owner_name: string;
  phone_number: string;
  price: number;
  image: string;
  description: string;
  lat: number;
  long: number;
}
export interface Housing {
  id: number;
  name: string;
  address: string;
  price: string;
  description: string;
  lat: number;
  long: number;
}

export const housingSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  price: z.string(),
  description: z.string(),
  lat: z.number(),
  long: z.number(),
});

export const originHousingSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  owner_name: z.string(),
  phone_number: z.string(),
  price: z.string(),
  image: z.string(),
  description: z.string(),
  lat: z.number(),
  long: z.number(),
});
