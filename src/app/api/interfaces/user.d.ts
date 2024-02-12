import { PostInfo } from "./post"

export interface NewUser {
  username:string
  email:string
  password:string
}

export interface User {
  id:number
  email:string
}

export interface UpdateUser {
  id:string
  data:{
    email:string
  }
}

export interface ChangeUser {
  id:string
  data:{
    email:string
  }
}

export interface UserInfo {
  id:number
  email:string
  posts:PostInfo[]
}