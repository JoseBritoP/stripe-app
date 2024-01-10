import { NextResponse,NextRequest } from "next/server";
import { createUser,getUsers } from "../../controllers/users";

export async function GET(req:NextRequest){
  try {
    const users = await getUsers();
    return NextResponse.json(users,{status:200})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400,statusText:'Bad request'})
  }
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