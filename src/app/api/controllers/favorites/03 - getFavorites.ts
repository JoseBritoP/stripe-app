import { prisma } from "@/app/config/db";

interface FavoritesInfo {
  id:number,
  username:string,
  email:string,
  favorites:{
    post:{
      id:number,
      title:string,
      content:string,
      user:{
        username:string
      }
    }
  }[]
};

const favoriteFormat = (fav:FavoritesInfo) => {
  const arrayPosts = fav.favorites.map((post)=>{
    const { id, title, content, user} = post.post
    return {
      id,
      title,
      content,
      author:user.username
    }
  })
  return {
    id:fav.id,
    username:fav.username,
    email:fav.email,
    favorites:arrayPosts
  }

}
const favoritesFormat = (favorites:FavoritesInfo[]) => {

  return favorites.map((fav)=>{
    const arrayPosts = fav.favorites.map((post)=>{
      const { id, title, content, user} = post.post
      return {
        id,
        title,
        content,
        author:user.username
      }
    })
    return {
      id:fav.id,
      username:fav.username,
      email:fav.email,
      favorites:arrayPosts
    }
  })

}

export const getFavorites = async () => {

  const usersWithFavorites = await prisma.user.findMany({
    where:{
      deleted:false
    },
    select:{
      id:true,
      username:true,
      email:true,
      favorites:{
        select:{
          post:{
            select:{
              id:true,
              title:true,
              content:true,
              user:{
                select:{
                  username:true,
                }
              }
            }
          }
        },
        orderBy:{
          createdAt:'asc'
        },
        take:2,
      }
    }
  })

  const cleanFavoritesInfo = favoritesFormat(usersWithFavorites);
  return cleanFavoritesInfo
};

export const getFavoritesByUser = async (userId:string) => {

  const favorites = await prisma.user.findUnique({
    where:{
      id:+userId
    },
    select:{
      id:true,
      username:true,
      email:true,
      favorites:{
        select:{
          post:{
            select:{
              id:true,
              title:true,
              content:true,
              user:{
                select:{
                  username:true,
                }
              }
            }
          }
        },
      },
    }
  });

  
  if(!favorites) throw new Error(`The user don't have favorites`);
  
  const cleanFavInfo = favoriteFormat(favorites)
  return cleanFavInfo;
  return favorites

};