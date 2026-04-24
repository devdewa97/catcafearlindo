import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Reservation from './pages/Reservation'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Rules from './pages/Rules'
import FAQ from './pages/FAQ'
import EventPaket from './pages/EventPaket'
import Adopsi from './pages/Adopsi'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/adopsi" element={<Adopsi />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/event-paket" element={<EventPaket />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App