import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("user"));
    if (item) {
      setUser(item)
    }
  }, [])

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export const UseGlobal = () => {
  return useContext(AppContext)
}

export default AppProvider


//Need to wrap the entire code using "AppProvider" and import in each component using "UseGlobal" or useContext(AppContext)