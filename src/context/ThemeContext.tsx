import React, { createContext, useContext, useEffect, useState } from 'react'

type Props = {
  theme: "light" | "dark"
  toggleTheme: ()=>void
}
const ThemeContext = createContext<Props | undefined>(undefined)

export const useTheme = () => {
  const context= useContext(ThemeContext)
  if(!context){
    throw new Error("useTheme within ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }:{children:React.ReactNode}) => {
  const [theme, setTheme] = useState<Props["theme"]>(
    () => localStorage.getItem('theme') as Props["theme"] || 'light'
  )

  useEffect(() => {
    if (theme) {
      setTheme(theme)
      document.documentElement.classList.add(theme)
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    location.reload()
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}