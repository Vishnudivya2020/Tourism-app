import Home from './Pages/HomePage/Home';
import Allroutes  from './Allrouter.jsx';
import { BrowserRouter } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Allroutes />
    </BrowserRouter>
    </>
  )
}

export default App
