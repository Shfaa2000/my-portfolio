import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Blogs from './pages/Blogs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  )
}

export default App
