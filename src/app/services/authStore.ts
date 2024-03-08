import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Profile = {
  id: string;
  username?:string;
  email?:string;
}

type Actions = {
  clearProfile: () => void;
  setProfile: (profile:any) => void;
};

export interface UserStore {
  profile:Profile,
}

export const useAuthStore = create(
  persist<UserStore & Actions>((set) => ({
    profile:{
      id:'',
      username:'',
      email:'',
      token:''
    },
    clearProfile: () => set((state)=>({...state,token:'',profile:{
      id:'',
      username:'',
      email:'',
      token:''
    }})),
    setProfile:(profile:any)=> set((state)=>({
      ...state,profile
    }))
  }), {
    name: 'auth',
  })
)
