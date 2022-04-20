import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/auth'

function Login() {
  const [user, setUser] = React.useState('')
  const auth: any = useAuth()
  const navigate = useNavigate()
  const location: any = useLocation();

  const redirectPath = location.state?.path || '/'

  useEffect(() => {
    console.log('redirectPath -> ', redirectPath)
    return () => { }
  }, [redirectPath])


  function handleLogin(e: any) {
    e.preventDefault()
    auth.login(user);
    navigate(redirectPath, { replace: true })
  }

  return (
    <div>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

    </div>

  )
}

export default Login