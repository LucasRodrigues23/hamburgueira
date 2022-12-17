import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../Services/Api'
import { iFormData, iUserContextProps, iUserData, iUserProvider } from './types'

export const UserContext = createContext({} as iUserProvider)


export const UserProvider = ({children}: iUserContextProps) => {
    const navigate = useNavigate()
    const [user, setUser] = useState<iUserData | null>(null)
    const [contextLoad, setContextLoad] = useState(true)
    
    useEffect(() => {
      const authUser = async () => {
        const token = localStorage.getItem('@hamburgueira-kenzie-token')
        const userId = localStorage.getItem('@hamburgueira-kenzie-id')
        
        
        if (!token) {
          setContextLoad(false)
          return
        }
  
        try {
          const { data } = await api.get(`/users/${userId}`, {
            headers: {
            authorization: `Bearer ${token}`}
          })
          setUser(data)
        } catch (error) {
          navigate('/login')
          
  
        } finally {
          setContextLoad(false)
        }
      }
      authUser()
    }, [])

    const userLogin = async (formData: iFormData, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
      try {
        setLoading(true)
        const { data } = await api.post('/login', formData)
        toast.success(`Bem vindo ${data.user.name}`)
        navigate('/home')
        localStorage.setItem('@hamburgueira-kenzie-token', (data.accessToken))
        localStorage.setItem('@hamburgueira-kenzie-id', JSON.stringify(data.user.id))
        setUser(data.user)
      } catch (error) {
        toast.error(`${error}`)
      } finally {
        setLoading(false)
      }
    }

    const userRegister = async (formData:  iFormData, setLoading:  React.Dispatch<React.SetStateAction<boolean>>) => {
      try {
        setLoading(true)
        const { data } = await api.post('/users' , formData)
        toast.success(`Opa faça login e aproveite`)
        navigate('/login')
      } catch (error) {
        toast.error(`${error}`)
      } finally {
        setLoading(false)
      }
    }
    const userLogout = () => {
      localStorage.removeItem('@hamburgueira-kenzie-token')
      localStorage.removeItem('@hamburgueira-kenzie-id')
      setUser(null)
      navigate('/login')
    }
    
    
      return(
        <UserContext.Provider value={{ user, userLogin, contextLoad, userLogout, userRegister }}>
          {children}
        </UserContext.Provider>
     )

   
}
