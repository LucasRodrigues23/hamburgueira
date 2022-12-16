import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../Services/Api'
import { iFormData, iUserContextProps, iUserData, iUserProvider } from './types'

export const UserContext = createContext({} as iUserProvider)


export const UserProvider = ({children}: iUserContextProps) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({} as iUserData)

    useEffect(() => {
      const authUser = async () => {
        const token = localStorage.getItem('@hamburgueria-kenzie-token')
  
        if (!token) {
          setLoading(false)
          return
        }
  
        try {
          const { data } = await api.get(`/users/${user.id}`, {
            headers: {
            authorization: `Bearer ${token}` }
          })
        } catch (error) {
          navigate('/login')
  
        } finally {
          setLoading(false)
        }
        
      }
      authUser()
    }, [])

    const userLogin = async (formData: iFormData) => {
      try {
        setLoading(true)
        const { data } = await api.post('/login', formData)
        toast.success(`Olá ${data.user.name}`, {theme: 'light', autoClose: 2000})
        navigate('/home')
        localStorage.setItem('@hamburgueira-kenzie-token', JSON.stringify(data.user.accessToken))
  
      } catch (error) {
        toast.error('Algo deu errado, tente novamente', {theme: 'light', autoClose: 2000})
        
      } finally {
        setLoading(false)
      }
    }
    
    
      return(
        <UserContext.Provider value={{ loading, user, userLogin }}>
          {children}
        </UserContext.Provider>
     )

   
}
