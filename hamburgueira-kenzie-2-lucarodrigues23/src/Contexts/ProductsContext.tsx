import { createContext, useEffect, useState } from "react";
import { api } from "../Services/Api";
import { iProductsProvider, iProductsProviderProps } from "./types";

export const ProductsContext = createContext({} as iProductsProvider)

export const ProductsProvider = ({children}: iProductsProviderProps) => {

    const [products, setProducts] = useState([] as Array<object>)
    useEffect(() => {
        const getProducts = async () => {
            const token = localStorage.getItem('@hamburgueira-kenzie-token')
         
            try {
                const { data } = await api.get('/products', {
                    headers: {
                        authorization: `Bearer ${token}` }
                })
                
                setProducts(data)
            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}