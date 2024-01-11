import { prisma } from "@/app/config/db";

interface Props {
  postId:string,
  data:{
    userId:string
  }
}

export const deletePost= async ({postId,data}:Props) => {

  const postToDelete = await prisma.post.findUnique({
    where:{
      id:+postId
    },
    select:{
      id:true,
      title:true,
      content:true,
      user:{
        select:{
          id:true
        }
      }
    }
  });

  if(!postToDelete) throw new Error(`The post don't exist`);

  if(+data.userId !== postToDelete.user.id) throw new Error(`Unauthorized`);

  return {
    message: 'Post deleted sucessfully',
    postToDelete
  }
};