import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext()

const initialUser = { id_usuario: '', email: '', nombre: '', avatar: '' }

const UserProvider = ({ children }) => {

  const [userData, setUserData] = useState({});
 
  useEffect(() => {
    setUserData(initialUser)
  
  }, [])


  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider