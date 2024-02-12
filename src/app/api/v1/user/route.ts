import { NextResponse,NextRequest } from "next/server";
import { createUser,getUsers,getUsersByEmail,getUserByUsername } from "../../controllers/users";

export async function GET(req:NextRequest){
  const username = req.nextUrl.searchParams.get('username')
  const email = req.nextUrl.searchParams.get('email')
  try {
    const users = username ? await getUserByUsername(username) : email ? await getUsersByEmail(email) : await getUsers();
    return NextResponse.json(users,{status:200})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400,statusText:'Bad request'})
  }
};

export async function POST (req:NextRequest){
  const data = await req.json();
  try {
    const userCreated = await createUser(data);
    return NextResponse.json(userCreated,{status:201,statusText:'User Created'})
  } catch (error:any) {
    return NextResponse.json({error:error.message},{status:400,statusText:'Bad request'})
  }
};