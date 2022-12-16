import { createContext, useEffect, useState } from "react";
import { api } from "../Services/Api";
import { iProductsProvider, iProductsProviderProps } from "./types";

export const ProductsContext = createContext({} as iProductsProvider)

export const ProductsProvider = ({children}: iProductsProviderProps) => {

    const [products, setProducts] = useState([] as Array<object>)
    useEffect(() => {
        const getProducts = async () => {
            const token = localStorage.getItem('@hamburgueria-kenzie-token')
            try {
                const { data } = await api.get('/products', {
                    headers: {
                        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQGdtYWlsLmNvbSIsImlhdCI6MTY3MTE5NDk3MywiZXhwIjoxNjcxMTk4NTczLCJzdWIiOiIxMiJ9.HuairZdDyeC-LyHZmMiuc3ss9I1Z2O1O7B3RUvF-sB0` }
                })
                console.log(data);
                
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