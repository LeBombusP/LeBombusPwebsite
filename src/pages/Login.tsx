import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Login');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = username;
    const pass = password;
    
    axios.post('http://localhost:8080/api/login', {
      username: user,
      password: pass
    })
    .then(res => {
      if (res.status==200) {
        localStorage.setItem("token", res.data);
        navigate('/dashboard');
      }
    })
    .catch(err => {
      setMessage('Wrong username or password');
      setTimeout(() => {
        setMessage('Login');
      },3000);
    });

  };
  return (
    <div className='App'>
      <h1 className='text-center text-5xl font-bold'>Login</h1>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit}>
          <input className='rounded bg-gray-900 border-2 m-2 p-1' type='text' id='username' placeholder='username' value={username} onChange={e => setUsername(e.target.value)} required />
          <input className='rounded bg-gray-900 border-2 m-2 p-1' type='password' id='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />
          <button className='border-2 rounded p-2 m-2 bg-gray-900' type='submit'>{message}</button>
        </form>
      </div>
    </div>
  );
}
//TODO: Style the login page properly

export default Login;