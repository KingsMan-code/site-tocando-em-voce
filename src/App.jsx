import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Historia from './pages/Historia'
import Galeria from './pages/Galeria'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import './App.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

