import { Routes, Route,BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Views/Home/Home'
import About from './Views/About/about'
import Contact from './Views/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}  />
          <Route path="about" element={<About/>}  /> 
          <Route path="contact" element={<Contact/>}  />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
