import { NextRequest,NextResponse as res } from "next/server";

import { newAccount } from "@/app/api/controllers/auth";

export async function POST (req:NextRequest){
  const data= await req.json()
  try {
    const registerUser = await newAccount(data);
    return res.json(registerUser,{status:201,statusText:'Register'})
  } catch (error:any) {
    return res.json({error:error.message})
  }
};