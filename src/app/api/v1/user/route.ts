import { NextResponse,NextRequest } from "next/server";
import { createUser } from "../../controllers/users";

export async function GET(req:NextRequest){
  return NextResponse.json({DIY:'All users'})
};

export async function POST (req:NextRequest){
  // return NextResponse.json({DIY:'User created'})
  const data = await req.json();
  try {
    const userCreated = await createUser(data);
    return NextResponse.json(userCreated,{status:201,statusText:'User Created'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400,statusText:'Bad request'})
  }
};