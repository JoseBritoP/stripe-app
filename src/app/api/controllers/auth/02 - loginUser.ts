import { prisma } from "@/app/config/db";
import { passwordCompare } from "../../utils/bycript.handler";

interface Props {
  username?:string
  email?:string
  password:string
}

export const loginUser = async ({username,email,password}:Props) => {
  const user = await prisma.user.findUnique({
    where:{
      username,
      email
    },
    select:{
      id:true,
      username:true,
      email:true,
      password:true
    }
  });

  if(!user) throw new Error('User no registered');

  const passwordHash = user.password;

  const isPasswordCorrect =  await passwordCompare(password,passwordHash);
  if(!isPasswordCorrect) throw new Error('Password incorrect');

  return {
    id:user.id,
    username:user.username,
    email:user.email,
    message:'Login successfully'
  }
};