import { Link } from "react-router-dom"

function App() {
  const clear = () =>  {
    localStorage.clear();
  } 
  return (
    <div className='App'>
      <h1 className='text-center text-5xl font-bold'>React prototype</h1>
      <Link to="/dashboard">Dash</Link>
      <Link to="/login">Login</Link>
      <Link to="/da">Error</Link>
      <button onClick={clear}>clear localstorage</button>
    </div>
  )
}
//TODO: Port old code to this project

export default App