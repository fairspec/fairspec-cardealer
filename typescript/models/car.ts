// biome-ignore-all format: DO NOT UPDATE this @generated file
import { z } from "zod";

export const Car = z.object({
    showroomId: z.string().optional(),
    title: z.string(),
    url: z.string(),
    price: z.number(),
    currency: z.string(),
    year: z.number().optional(),
    mileage: z.number(),
    brand: z.string(),
    model: z.string(),
    version: z.string(),
    fuel: z.union([z.literal("diesel"), z.literal("petrol"), z.literal("hybrid"), z.literal("electric")]),
    gearbox: z.union([z.literal("manual"), z.literal("auto")]),
    category: z.union([z.literal("small"), z.literal("estate"), z.literal("saloon"), z.literal("suv"), z.literal("van"), z.literal("sport"), z.literal("cabrio")]),
    color: z.union([z.literal("grey"), z.literal("black"), z.literal("white"), z.literal("blue"), z.literal("red"), z.literal("green"), z.literal("yellow"), z.literal("orange")]),
    door: z.union([z.literal("twothree"), z.literal("fourfive"), z.literal("sixseven")]),
    power: z.number().optional(),
    cubics: z.number().optional(),
    seats: z.number().optional(),
    owners: z.number().optional(),
    month: z.number().optional(),
    warranty: z.number().optional(),
    range: z.number().optional(),
    battery: z.number().optional(),
    plate: z.string().optional(),
    vin: z.string().optional()
});
export type Car = z.infer<typeof Car>
