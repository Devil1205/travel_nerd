import './App.css'
import Footer from './Components/Footer/Footer'
import FullBlog from './Components/Home/BlogPost/FullBlog';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/fullBlog' element={<FullBlog />} />
      </Routes>
        <Footer />
    </Router>
  )
}

export default App
