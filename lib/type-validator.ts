import { z } from "zod";
import { formatToCurrency } from "@/lib/utils";

export const CreateProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long").nonempty(),
  slug: z.string().min(3, "Slug must be at least 3 characters long").nonempty(),
  category: z
    .string()
    .min(3, "Category must be at least 3 characters long")
    .nonempty(),
  brand: z
    .string()
    .min(3, "Brand must be at least 3 characters long")
    .nonempty(),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long")
    .nonempty(),
  images: z.array(z.string()).min(1, "At least one image is required"),
  stock: z.coerce.number(),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: z
    .string()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatToCurrency(parseFloat(value))),
      {
        message: "Price must have a valid format",
      },
    ),
});
