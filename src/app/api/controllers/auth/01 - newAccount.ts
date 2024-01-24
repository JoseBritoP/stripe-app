import { prisma } from '@/app/config/db';
import { bycrypt } from '../../utils/bycript.handler';

interface Props {
  username:string,
  email:string,
  password: string
};

interface NewAccount {
  message:string,
  user:{
    id:number,
    username:string,
    email:string
  }
}

const checkUserExist = async (username:string,email:string) => {
  const usernameExist = await prisma.user.findUnique({
    where:{
      username
    }
  });
  if(usernameExist) throw new Error(`The username already exist`)

  const emailExist = await prisma.user.findUnique({
    where:{
      email
    }
  });

  if(emailExist) throw new Error(`Try again with another email`);
};


export const newAccount = async ({username,email,password} : Props):Promise<NewAccount> => {

  await checkUserExist(username,email);

  const passwordHash = await bycrypt(password);

  const newUser = await prisma.user.create({
    data:{
      username,
      email,
      password:passwordHash
    },
    select:{
      id:true,
      username:true,
      email:true
    }
  });

  if(!newUser) throw new Error(`An error has ocurred`)

  return {
    message:'Account successfully created',
    user:{
      id:newUser.id,
      username: newUser.username,
      email:newUser.email
    }
  }
};