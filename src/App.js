import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogDetail from './pages/Blog/BlogDetail/BlogDetail'
import NotFound from './pages/NotFound/NotFound'
import About from './pages/About/About'
import Talk from './pages/Talk/Talk'
import Category from './pages/Category/Category'
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/:id' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/blogDetail/:id' element={<BlogDetail />} />
            <Route path='/talk' element={<Talk />} />
            <Route path='/category' element={<Category />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
