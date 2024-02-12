import { NextResponse as res,NextRequest } from "next/server";
import { removeFavorites,getFavoritesByUser } from "@/app/api/controllers/favorites";

interface Params {
  params:{
    userId:string
  }
}

export async function GET(_req:NextRequest,{params}:Params){
  try {
    const favoritesByUser = await getFavoritesByUser(params.userId);
    return res.json(favoritesByUser,{status:200,statusText:'GET FAVORITES User'})
  } catch (error:any) {
    return res.json({error:error.message})
  }
}

export async function PUT(req:NextRequest,{params}:Params){
  const data = await req.json();
  try {
    const favoritesRemove = await removeFavorites({userId:params.userId,postId:data.postId});
    return res.json(favoritesRemove,{status:200,statusText:'Favorite remove'})
  } catch (error:any) {
    return res.json({error:error.message})
  }
}