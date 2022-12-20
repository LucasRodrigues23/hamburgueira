import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'

export const ProtectRoutes = () => {

    const { contextLoad, user } = useContext(UserContext)

    if (contextLoad) {
        return null
    }
    return user ? <Outlet /> : <Navigate to={'/login'} />
}
