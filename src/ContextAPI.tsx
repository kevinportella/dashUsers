import { createContext, ReactNode, useEffect, useState } from "react";

interface Context {
  results: {
    name: {
      first: string;
      last: string;
    }
    email: string;
    gender: string;
    registered: {
      date: string;
    }
    phone: string;
    country: string;
    location: {
      street: {
        number: number;
        name: string;
      }
    }
    image: string;
    login: {
      salt: string;
    }
}}

interface ContextProviderProps {
  children: ReactNode;
}


export const ContextAPI = createContext<Context[]>([])

export function ContextProvider({children} : ContextProviderProps) {
  const [userProfile, setUserProfile] = useState<Context[]>([])

  const getUserProfile = async () => {
    const user = await fetch(`https://randomuser.me/api/?results=10`)
      .then(response => response.json())
      .then(data => setUserProfile(data.results));

      console.log(user)
  }

  useEffect(() => {
    getUserProfile()
  },[])

  return (
    <ContextAPI.Provider value={userProfile}>
      {children}
    </ContextAPI.Provider>
  )
}
