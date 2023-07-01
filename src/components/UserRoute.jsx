import React from 'react'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

const UserRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user)
  return currentUser ? <div>{children}</div> : <LoadingToRedirect />
}

export default UserRoute
