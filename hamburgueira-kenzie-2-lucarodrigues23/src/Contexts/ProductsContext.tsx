import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../Services/Api";
import { iProduct, iProductsProvider, iProductsProviderProps } from "./types";
import { UserContext } from "./UserContext";

export const ProductsContext = createContext({} as iProductsProvider)

export const ProductsProvider = ({children}: iProductsProviderProps) => {

    const [products, setProducts] = useState([] as Array<iProduct>)
    const [filteredProducts, setFilteredProducts] = useState([] as Array<iProduct>)
    const [cartTotal, setCartTotal] = useState(0)
    const [currentCart, setCurrentCart] = useState([] as Array<iProduct>)
    console.log(products, filteredProducts);
    

    const { user } = useContext(UserContext)
    useEffect(() => {
        const getProducts = async () => {
            const token = localStorage.getItem('@hamburgueira-kenzie-token')
         
            try {
                const { data } = await api.get('/products', {
                    headers: {
                        authorization: `Bearer ${token}` }
                })
                
                setProducts(data)
                setFilteredProducts(data)
            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, [user])


    const addToCart = (product: iProduct) => {
        setCurrentCart((oldSales) => [...oldSales, product])
        toast.success('Produto adicionado ao carrinho!')
        if (product.price) {
            setCartTotal(cartTotal + product.price)
        }
        localStorage.setItem('@hamburgueria-kenzie-cart:', JSON.stringify(currentCart))
  }

  const searching = (data: string) => {
    console.log(products);
    
    if (products) {
        setFilteredProducts(products.filter((elem) =>
      elem.name.toUpperCase().replace(/[\u0300-\u036f]/g, "").includes(data.toUpperCase().replace(/[\u0300-\u036f]/g, ""))
      ||
      elem.category.toUpperCase().replace(/[\u0300-\u036f]/g, "").includes(data.toUpperCase().replace(/[\u0300-\u036f]/g, ""))
    ))
  }
    }
    

    return (
        <ProductsContext.Provider value={{products, addToCart, searching, cartTotal, setCartTotal,  currentCart, setCurrentCart, filteredProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}