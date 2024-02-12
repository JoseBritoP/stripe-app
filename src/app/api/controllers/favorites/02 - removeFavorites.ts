import { prisma } from "@/app/config/db";

interface Props {
  userId:string,
  postId:string
}

export const removeFavorites = async({userId,postId}:Props) => {

  const favorite = await prisma.favorite.findUnique({
    where: {
      userId_postId:{
        userId: +userId,
        postId: +postId,
      }
    },
  });

  if(!favorite) throw new Error(`The favorite post ${postId} from user ${userId} don't exist`);

  await prisma.favorite.deleteMany({
    where: {
      userId: +userId,
      postId: +postId,
    },
  });

  return {
    message: 'Favorite removed successfully'
  }
};