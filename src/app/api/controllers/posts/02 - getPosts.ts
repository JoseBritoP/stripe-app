import { prisma } from "@/app/config/db";
import { PostInfo } from "../../interfaces/post";

const postFormat = (posts:PostInfo[]) => {
  return posts.map((post)=>{
    console.log(post)
    const { id, title, content, category } = post
    const { email } = post.user;
    return {
      id:id,
      title:title,
      content:content,
      author: email,
      categories: !category.length ? 'No categories' : category
    }
  })
}


export const getPosts = async() => {

  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      user: {
        select: {
          email: true,
        },
      },
      category:{
        select:{
          id:true,
          name:true
        }
      }
    },
    orderBy:{
      createAt:'desc'
    }
  });

  if(!posts.length) throw new Error(`No posts`);
  const cleanPosts = postFormat(posts);
  return cleanPosts
};

export const getPostByTitle = async (title:string) => {
  const posts = await prisma.post.findMany({
    where:{
      title:{
        contains: title,
        mode: "insensitive"
      }
    },
    select: {
      id: true,
      title: true,
      content: true,
      user: {
        select: {
          email: true,
        },
      },
      category:{
        select:{
          id:true,
          name:true
        }
      }
    },
    orderBy:{
      createAt:'asc'
    }
  });

  if(!posts.length) throw new Error(`No posts with the title ${title}`);
  const cleanPosts = postFormat(posts);
  return cleanPosts
};

export const getPost = async(postId:string) => {
  const post = await prisma.post.findUnique({
    where:{
      id:+postId
    },
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
    }
  });

  if(!post) throw new Error('No se encontró el post');

  return post
};

export const getPostByPage = async (page:number=1) => {

  const pageNumber = Math.max(1, Math.floor(page));

  const postsPerPage = 2;

  const postSkipped = (pageNumber - 1) * postsPerPage;

  const posts = await prisma.post.findMany({
    skip:postSkipped,
    take: postsPerPage,
    select: {
      id: true,
      title: true,
      content: true,
      user: {
        select: {
          email: true,
        },
      },
      category:{
        select:{
          id:true,
          name:true
        }
      }
    },
    orderBy:{
      title:"asc"
    }
  });
  
  if(!posts.length) throw new Error(`No posts found`)
  const cleanPosts =  postFormat(posts)
  return cleanPosts
};