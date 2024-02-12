import { NextResponse as res, NextRequest } from "next/server";
import { postFavorites, getFavorites } from "../../controllers/favorites";

export async function GET (_req:NextRequest){
  try {
    const favorites = await getFavorites();
    return res.json(favorites,{status:200,statusText:'GET Favorites'})
  } catch (error:any) {
    return res.json({error:error.message})
  }
};

export async function POST(req:NextRequest) {
  const data = await req.json();
  try {
    const newFavorite = await postFavorites(data);
    return res.json(newFavorite,{status:200,statusText:'New Favorite'})
  } catch (error:any) {
    return res.json({error:error.message})
  }
}