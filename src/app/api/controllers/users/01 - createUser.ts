import { prisma } from "@/app/config/db";
import { NewUser } from "@/app/api/interfaces/user";
import { bycrypt } from "../../utils/bycript.handler";


const userExist = async (email:string,username:string) => {
  // const userEmail = await prisma.user.findMany({
  //   where:{
  //     email
  //   }
  // });
  const userEmail = await prisma.user.findUnique({
    where:{
      email
    }
  });

  const userUsername = await prisma.user.findUnique({
    where:{
      username
    }
  })

  if(userEmail || userUsername) throw new Error(`The userdata already exist`)
  // if(userEmail.length > 0) throw new Error(`The user ${email} already exist`);

};

export const createUser = async ({username,email,password}:NewUser) => {

  await userExist(email,username);

  const passwordHash = await bycrypt(password)

  const newUser = await prisma.user.create({
    data:{
      username,
      email,
      password:passwordHash
    }
  });

  if(!newUser) throw new Error(`No se pudo crear el usuario de nombre ${email}`);

  return {
    message: 'User created successfully',
    newUser
  }
};