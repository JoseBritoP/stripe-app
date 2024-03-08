import { prisma } from "@/app/config/db";

import { NewPost,NewPostV2 } from "../../interfaces/post";

export const createPost = async(data:NewPost) => {

  const author = await prisma.user.findUnique({
    where:{
      id:+data.userId
    },
    select:{
      id:true,
      username:true,
      premium:true,
      posts:true
    }
  });

  if(!author) throw new Error(`The author don't exist`);

  if(author.posts.length > 3 && !author.premium) throw new Error(`The user isn't premium`)

  const newPost = await prisma.post.create({
    data:{
      title:data.title.trim(),
      content:data.content.trim(),
      userId:+data.userId
    }
  });

  if(!newPost) throw new Error(`An error to create a post`);

  return {
    message:'Post created successfully',
    newPost
  }
};

export const createPostWithCategories = async (data:NewPostV2) => {

  const author = await prisma.user.findUnique({
    where:{
      id:+data.userId
    },
    select:{
      id:true,
      username:true,
      premium:true,
      posts:true
    }
  });

  if(!author) throw new Error(`The author don't exist`);

  if(author.posts.length > 3 && !author.premium) throw new Error(`The user isn't premium`)

  // Transforma los IDs de categorías en un formato adecuado para el connect  [{id:1},{id:2}]
  const categoriesToConnect = data.categories && data.categories.map((categoryId) => {
    return { id: categoryId };
  });

  const categoriesInDB = data.categories && data.categories.map(async(category)=>{
    const categoryBD = await prisma.category.findUnique({
      where:{
        id:category
      }
    });
    if(!categoryBD) throw new Error(`The category don't exist`)
  })
  await Promise.all(categoriesInDB)

  const newPost = await prisma.post.create({
    data:{
      title:data.title.trim(),
      content:data.content.trim(),
      userId:+data.userId,
      category: {
        connect: categoriesToConnect,
      },
    },
    include:{
      category:true
    },
  }) 

  if(!newPost) throw new Error('An error ocurred creating a post with categories');
  const {id,title,content,userId,category} = newPost;
  return {
    message:'Post created successfully',
    newPost
  }
};