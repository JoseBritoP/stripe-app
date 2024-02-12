import { prisma } from "@/app/config/db";

interface Props {
  userId:string,
  postId:string
}

export const postFavorites = async ({userId,postId}:Props) => {

  const user = await prisma.user.findUnique({
    where:{
      id:+userId
    },
    include:{
      favorites:true
    }
  });

  if(!user) throw new Error(`The user ${userId} don't exist`);

  const post = await prisma.post.findUnique({
    where:{
      id:+postId
    }
  })

  if(!post) throw new Error(`The post ${postId} don't exist`);

  const postAlreadyFavorited = user.favorites.some(favorite => favorite.postId === +postId);
  if(postAlreadyFavorited) return;

  const postToFavorites = await prisma.favorite.create({
    data: {
      user: { connect: { id: +userId } },
      post: { connect: { id: +postId } },
    },
  });
  if(!postToFavorites) throw new Error(`An error has ocurred`);

  return {
    message:'Post Favorites Agree Successfully',
    postToFavorites
  }
};