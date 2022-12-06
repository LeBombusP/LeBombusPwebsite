import { Outlet, Navigate } from 'react-router-dom'
import axios from 'axios'

const PrivateRoute = () => {
  let token = localStorage.getItem('token')
  if (token) {
    axios.post('http://localhost:8080/api/check', {
      jwt: token
    })
    .then(res => {
      if (res.status == 200) {
        return (
          <Outlet />
        )}
      else {
        return (
          <Navigate to='/login' />
        )}
    })
    .catch(err => {
      console.log(err)
    });
  }
  else {
    return (
      <Navigate to='/login' />
    )
  }
}

export default PrivateRoute;