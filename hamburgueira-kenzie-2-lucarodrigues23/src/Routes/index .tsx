import { Navigate, Route } from "react-router"
import { Routes } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"


export const SampleRoutes = () => {
    return(
        <Routes>
            <Route path="home" element={<Dashboard />} />
            <Route path="Login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path='*' element={<Navigate to='home' />} />
        </Routes>

    )
}