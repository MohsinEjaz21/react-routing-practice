import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/auth'

const RequireAuth = (prop: any) => {
  const auth: any = useAuth()
  const { children } = prop
  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    console.log('[RequireAuthComponent] auth.user -> ', auth?.user)
    if (!auth.user) {
      navigate('/login', { state: { path: location.pathname } })
    }
    return () => { }
  }, [auth?.user])


  return children
}

export default RequireAuth