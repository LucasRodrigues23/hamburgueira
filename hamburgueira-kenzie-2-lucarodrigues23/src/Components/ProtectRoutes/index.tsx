import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'

export const ProtectRoutes = () => {
  console.log('hi');
  
  const {loading, user} =  useContext(UserContext)
    console.log(user)
    
  if(loading) {
      return null
  } 
  return user ? <Outlet /> : <Navigate to={'/login'} />
}