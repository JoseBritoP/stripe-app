import axios from 'axios'

interface RegisterProps {
  username:string
  email:string
  password:string
}

interface LoginProps {
  email:string
  password:string
}
export const registerUser = async (data:RegisterProps) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/v1/auth/register`,data)
    // console.log(`Response: ${res}`);
    return res
  } catch (error:any) {
    console.log(`Error: ${error.message}`)
  }
};

export const loginUser = async (data:LoginProps) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/v1/auth/login`,data)
    return res
  } catch (error:any) {
    console.log(`Error:${error.message}`)
  }
}
