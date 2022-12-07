import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const PrivateRoute = () => {
  const navigate = useNavigate()
  let token : string = localStorage.getItem('token')

  if (!token) {
    console.log("No token");
    return (
      <Navigate to='/login' />
    )
  }
  axios.post('http://localhost:8080/api/check', {
    jwt: token
  })
  .then(res => {
    console.log("first")
    if (res.status != 200) {
      navigate('/login');
    }
    return (
      <Outlet />
    )
  })
  .catch(err => {
    console.log(err)
  })
}

export default PrivateRoute;