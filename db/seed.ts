import sampleData from "./sample-data";
import prisma from "@/lib/config";

const seed = async () => {
  try {
    await prisma.product.deleteMany({});
    await prisma.product.createMany({
      data: sampleData.products,
    });

    console.log("seeded successfully");
  } catch (error) {
    console.error(error);
  }
};

await seed();
