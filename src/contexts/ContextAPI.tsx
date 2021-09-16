import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

interface IUserResult {
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
}

interface Context {
  userList: IUserResult[]
  updatePage: (page: number) => void;
  currentPage: number;
}

interface ContextProviderProps {
  children: ReactNode;
}


export const ContextAPI = createContext<Context>({} as Context)

export function ContextProvider({children} : ContextProviderProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [userList, setUserList] = useState<IUserResult[]>([])

  const getUsers = useCallback(async () => {
    const response = await
      fetch(`https://randomuser.me/api/?results=5&page=${currentPage}`)
      .then(response => response.json());

      setUserList((currentState) => {
        return[
          ...currentState,
          ...response.results,
        ]
      })
  },[currentPage])

  useEffect(() => {
    getUsers()
  },[getUsers])

  return (
    <ContextAPI.Provider value={{
      userList,
      currentPage,
      updatePage: (page) => {
        setCurrentPage(page)
      }
    }}>
      {children}
    </ContextAPI.Provider>
  )
}

export function useHookContext(): Context {
  const context = useContext(ContextAPI);

  if (!context) {
    throw new Error('useHookContext must be used within an ContextProvider')
  }

  return context;
}
