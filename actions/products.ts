"use server";
import prisma from "../lib/config";
import { parseToJSON } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import { Product } from "@/types/types";

// Get latest products

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return parseToJSON<Product[]>(data);
}

export const getProductBySlug = async (
  slug: string,
): Promise<Product | null> => {
  const data = await prisma.product.findFirst({ where: { slug } });
  return parseToJSON(data);
};
