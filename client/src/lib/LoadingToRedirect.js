import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const LoadingToRedirect = () => {

    const navigate = useNavigate()
    const [count, setCount] = useState(5)

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCount((currentCount) => currentCount -= 1)
        }, 1000)
        count === 0 && navigate('/signin')

        return ()  => clearInterval(interval)
    },[count, navigate])
  return (
    <div>LoadingToRedirect</div>
  )
}

export default LoadingToRedirect