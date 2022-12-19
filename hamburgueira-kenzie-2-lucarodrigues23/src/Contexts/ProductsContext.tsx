import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../Services/Api";
import { iProduct, iProductsProvider, iProductsProviderProps } from "./types";
import { UserContext } from "./UserContext";

export const ProductsContext = createContext({} as iProductsProvider)

export const ProductsProvider = ({children}: iProductsProviderProps) => {

    const [products, setProducts] = useState([] as Array<iProduct>)
    const [filteredProducts, setFilteredProducts] = useState<iProduct[]>([])
    const [cartTotal, setCartTotal] = useState(0)
    const [currentCart, setCurrentCart] = useState<iProduct[]>(JSON.parse(`${localStorage.getItem('@hamburgueria-kenzie-cart:')}`) || [])

    const { user } = useContext(UserContext)
    useEffect(() => {

        const getProducts = async () => {
            const token = localStorage.getItem('@hamburgueira-kenzie-token')
            
            if (!token) {
                return null
            }
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
  }

  useEffect(() => {
     localStorage.setItem('@hamburgueria-kenzie-cart:', JSON.stringify(currentCart))
  }, [currentCart])
  
  const searching = (data: string) => {
    if (products) {
        setFilteredProducts(products.filter((elem) =>
      elem.name.toUpperCase().replace(/[\u0300-\u036f]/g, "").includes(data.toUpperCase().replace(/[\u0300-\u036f]/g, ""))
      ||
      elem.category.toUpperCase().replace(/[\u0300-\u036f]/g, "").includes(data.toUpperCase().replace(/[\u0300-\u036f]/g, ""))
    ))
  }
    }
    
    const removeCartProduct = (product: iProduct) => {    
       setCurrentCart(currentCart.filter((elem) => elem.name !== product.name))
       setCartTotal(currentCart.filter((elem) => elem.name !== product.name).reduce((acc, elem) => acc + elem.price, 0))
    }

    const subProductCart = (product: iProduct) => {
        const i = currentCart.findIndex((elem) => elem.name === product.name)
        setCurrentCart(currentCart.filter((elem, index) => index !== i ))
        setCartTotal(currentCart.filter((elem, index) => index !== i ).reduce((acc, elem) => acc + elem.price, 0))
      }
    return (
        <ProductsContext.Provider value={{removeCartProduct, subProductCart, products, addToCart, searching, cartTotal, setCartTotal,  currentCart, setCurrentCart, filteredProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}