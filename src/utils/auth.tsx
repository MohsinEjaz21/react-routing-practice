import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = (prop: any) => {
  const { children } = prop
  const [user, setUser] = useState(null);
  function login(user: any) {
    setUser(user);
  }
  function logout() {
    setUser(null);
  }
  const provider: any = { user, login, logout }

  return (
    <AuthContext.Provider value={provider}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}