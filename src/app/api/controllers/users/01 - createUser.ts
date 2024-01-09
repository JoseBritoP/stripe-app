import { prisma } from "@/app/config/db";
import { NewUser } from "@/app/api/interfaces/user";


const userExist = async (email:string) => {
  const user = await prisma.user.findMany({
    where:{
      email
    }
  });

  if(user.length > 0) throw new Error(`The user ${email} already exist`);

};

export const createUser = async ({email}:NewUser) => {

  await userExist(email);

  const newUser = await prisma.user.create({
    data:{
      email
    }
  });

  if(!newUser) throw new Error(`No se pudo crear el usuario de nombre ${email}`);

  return {
    message: 'Usuario creado',
    newUser
  }
};