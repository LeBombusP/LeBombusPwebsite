import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = () => {
  const navigate = useNavigate()
  let token : string = localStorage.getItem('token')
  let [bool, setBool] = useState(false)

  if (!token) {
    console.log("No token");
    return (
      <Navigate to="/login" />
    )
  }
  axios.post('http://localhost:8080/api/check', {
    jwt: token
  })
  .then(res => {
    if (res.status != 200) {
      navigate('/login');
    }
    setBool(true);
  })
  .catch(err => {
    console.log(err)
  })
  return (
    <>
      {bool ? <Outlet /> : <> </>}
    </>
  )
}

export default PrivateRoute;