import React, { createContext, useState } from 'react'


export const sidebarContext = createContext()
const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen]=useState(false)
  const handleClose=()=>{
    setIsOpen(false)
  }
  return (
   <sidebarContext.Provider value={{isOpen,handleClose,setIsOpen}}>{children}</sidebarContext.Provider>
  )
}

export default SidebarProvider