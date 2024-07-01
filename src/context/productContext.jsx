
import React, { createContext, useEffect, useState } from 'react'

export const productContext = createContext()


const ProductProvider = ({children}) => {

const [products,setProducts]= useState([])

useEffect(()=>{
const fetchedProducts = async ()=>{
  const response =await fetch("https://fakestoreapi.com/products")
 const data = await response.json()
 console.log(data);
 setProducts(data)
}
fetchedProducts()
},[])
  return (
    <productContext.Provider value={{products}}>
    {children}
    </productContext.Provider>
  )
}

export default ProductProvider