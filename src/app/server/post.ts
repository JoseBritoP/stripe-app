import axios from "axios";

interface PostProps {
  title:string
  content:string
  userId:string
  categories:number[]
}

export const createPost = async (data:PostProps) => {
    return await axios.post(`http://localhost:3000/api/v1/post`,data)
};