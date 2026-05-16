import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projetos" element={<Projects />} />
        <Route path="experiencias" element={<Experiences />} />
      </Route>
    </Routes>
  )
}

export default App
