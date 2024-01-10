import { prisma } from "@/app/config/db";

interface UserInfo {
  id:number
  email:string
  posts:{
    id:number,
    title:string,
    content:string,
    createAt:string,
    category:{
      id:number
      name:string
    }[],
  }[]
}

const userFormat = (users:UserInfo[]) => {
  return users.map((user)=>{
    const { id,email,posts} = user;
    return {
      id,
      email,
      posts: !posts.length ? 'No tiene publicaciones' : posts.map((post)=>{
        console.log(post)
        return {
          id:post.id,
          title:post.title,
          content:post.content,
          category: !post.category.length ? 'No tiene categorías' : post.category,
        }
      })
    }
  })
};

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      posts: {
        select: {
          id: true,
          title: true,
          content: true,
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

  console.log(users[0].posts)
 
  if(!users.length) throw new Error('No hay usuarios');

  const cleanUsers = userFormat(users)
  return cleanUsers
};