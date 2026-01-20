// biome-ignore-all format: DO NOT UPDATE this @generated file
import { z } from "zod";

export const Showroom = z.object({
    id: z.string(),
    title: z.string(),
    country: z.string(),
    region: z.string(),
    city: z.string(),
    address: z.string(),
    postcode: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    url: z.string().optional(),
    lon: z.number().optional(),
    lat: z.number().optional()
});
export type Showroom = z.infer<typeof Showroom>
