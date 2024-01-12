import { prisma } from "@/app/config/db";

export const getCategories = async () => {
  const categories = await prisma.category.findMany();

  if(!categories.length) throw new Error(`No categories found`);

  return categories
};