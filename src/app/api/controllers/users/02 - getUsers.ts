import { prisma } from "@/app/config/db";

interface UserInfo {
  id:number
  username:string
  email:string
  posts:{
    id:number,
    title:string,
    content:string,
    createAt?:Date,
    category:{
      id:number
      name:string
    }[],
  }[]
}

const userFormat = (users:UserInfo[]) => {
  return users.map((user)=>{
    const { id, username , email , posts } = user;
    return {
      id,
      username,
      email,
      posts: !posts.length ? 'No posts' : posts.map((post)=>{
        return {
          id:post.id,
          title:post.title,
          content:post.content,
          category: !post.category.length ? 'No categories' : post.category,
        }
      })
    }
  })
};

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username:true,
      email: true,
      posts: {
        select: {
          id: true,
          title: true,
          content: true,
          createAt:true,
          category: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createAt: 'desc', // Ordenar por fecha de creación en orden descendente
        },
        take: 2, // Obtener solo los últimos 2 posts
      },
    },
  });

 
  if(!users.length) throw new Error('No hay usuarios');
  return users

  const cleanUsers = userFormat(users)
  return cleanUsers
};

export const getUser = async(userId:string) => {
  const user = await prisma.user.findUnique({
    where:{
      id:+userId
    },
    select: {
      id: true,
      email: true,
      posts: {
        select: {
          id: true,
          title: true,
          content:true
        },
      },
    },
  });

  if(!user) throw new Error(`The user id ${userId} don't exist`);

  return user
};

export const getUsersByEmail = async(email:string) => {
  const users = await prisma.user.findMany({
    where:{
      email:{
        contains:email,
        mode:'insensitive'
      }
    },
    select:{
      id:true,
      username:true,
      email:true,
      posts:{
        select:{
          id:true,
          title:true,
          content:true,
          category:{
            select:{
              id:true,
              name:true
            }
          }
        },
      }
    }
  });

  if(!users.length) throw new Error(`Don't exist users with ${email}`)
  
  const cleanUsers = userFormat(users);
  return cleanUsers;
};

export const getUserByUsername = async(username:string) => {
  
  const users = await prisma.user.findMany({
    where:{
      email:{
        contains:username,
        mode:'insensitive'
      }
    },
    select:{
      id:true,
      username:true,
      email:true,
      posts:{
        select:{
          id:true,
          title:true,
          content:true,
          category:{
            select:{
              id:true,
              name:true
            }
          }
        },
      }
    }
  });

  if(!users.length) throw new Error(`Don't exist users with ${username}`)
  
  const cleanUsers = userFormat(users);
  return cleanUsers;
};

export const getUserByQuery = async(username:string | undefined, email:string|undefined) => {

  const users = username ? await getUserByUsername(username) : email ? await getUsersByEmail(email) : null;

  return users
};