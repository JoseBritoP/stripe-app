import { NextResponse as res,NextRequest } from "next/server";

import { loginUser } from "@/app/api/controllers/auth";

export async function POST(req:NextRequest){
  const data = await req.json()
  try {
  const userLogged = await loginUser(data);
  return res.json(userLogged,{status:200,statusText:'Logged'})    
  } catch (error:any) {
  return res.json({error:error.message})
  }
};