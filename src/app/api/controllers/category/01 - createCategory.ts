import { prisma } from "@/app/config/db";

interface Props {
  name:string
}

const categoryExist = async (name:string) => {
  const existingCategory = await prisma.category.findMany({
    where: {
      name,
    },
  });

  if(existingCategory.length !== 0 ) throw new Error(`La categoría ${name} ya existe`)

};


export const createCategory = async ({name}:Props) => {

  await categoryExist(name);
  
  const newCategory = await prisma.category.create({
    data:{
      name
    }
  });

  if(!newCategory) throw new Error(`An error has ocurred`);

  return {
    message:'Category created',
    newCategory
  }
}