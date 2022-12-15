import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../Services/Api'
import { clearTokenLocal, getTokenLocal } from '../Services/LocalStorage'

export const UserContext = createContext({})

interface iUserProviderProps{
    children: React.ReactNode
}

interface iUser{
    accessToken: string
    user: {
        id: string
        name: string
        email: string
    }
}

export const UserProvider = ({children}: iUserProviderProps) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({} as iUser)
    const navigate = useNavigate()


    /* useEffect(() => {
        const authUser = async () => {
            const token = getTokenLocal()
      
            if (!token && user) {
              setLoading(false)
              return
            }
      
            try {
              const { data } = await api.get(`/user/${user.user.id}`, {
                headers: {
                authorization: `Bearer ${token}` }
              })
              setUser(data)
            } catch (error) {
              clearTokenLocal()
              navigate('/login')
      
            } finally {
              setLoading(false)
            }
            
          }
          authUser()
    }, []) */

  /*   const userLogin = (data) => {

    }

    const userRegister = (data) => {

    }
    
     */

    return(
        <UserContext.Provider value={{loading}}>
            {children}
        </UserContext.Provider>
    )
}
