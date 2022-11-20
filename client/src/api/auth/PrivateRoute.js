import React, {useState, useEffect} from 'react'
import { authenticate, isAuthenticated } from './authHelpers'
import LoadingToRedirect from '../../lib/LoadingToRedirect'

const PrivateRoute = ({
    children,
    redirectPath='/signin'
}) => {
    const [ok, setOk] = useState(false)

    useEffect(() => {
       auth.isAuthenticated ? (
            setOk(true)
       ):(
            setOk(false)
       )
    }, [])
  return ok ? (
    <div>
    {children}
    </div>
  ):(
<LoadingToRedirect/>
  )
}

export default PrivateRoute