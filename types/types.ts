import { z } from "zod";
import { CreateProductSchema } from "@/lib/type-validator";

export type Product = z.infer<typeof CreateProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
  reviewsCount: number;
};
