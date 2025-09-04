import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import './App.scss'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/login' element={ <Login/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
