export const getCartLocal = () => {
    return JSON.parse(localStorage.getItem('@hamburgueira-cart') || '')
}

export const setCartLocal = () => {
    localStorage.setItem('@hamburgueria-cart', JSON.stringify('s'))
}

export const getUserLocal = () => {
    return JSON.parse(localStorage.getItem('@hamburgueira-user') || '')
}

export const setUserLocal = () => {
    localStorage.setItem('@hamburgueira-user', JSON.stringify('a'))
}

export const getTokenLocal = () => {
    return JSON.parse(localStorage.getItem('@hamburgueira-token') || '')
}

export const setTokenLocal = () => {
    localStorage.setItem('@hamburgueira-token', JSON.stringify('a'))
}

export const clearTokenLocal = () => {
    localStorage.removeItem('@hamburgueira-token')
}