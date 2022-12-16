export interface iUserContextProps{
    children: React.ReactNode
}

export interface iUserData{
    email: string
    password: string
    name: string
    id: number
}
  
export interface iFormData{
    name?: string
    email: string
    password: string
}

export interface iUserProvider{
    loading: boolean
    user: object
    userLogin: (formData: iFormData) => Promise<void>
}

export interface iUserState{
    accessToken: string
      user: {
          email: string
          name: string
          id: number
      }
  }

export interface iProductsProviderProps{
    children: React.ReactNode
}

export interface iProductsProvider{
    products: Array<object>
}  
