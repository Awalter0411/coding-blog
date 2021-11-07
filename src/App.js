import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BlogDetail from './pages/Blog/BlogDetail/BlogDetail'
import NotFound from './pages/NotFound/NotFound'
import About from './pages/About/About'
import Talk from './pages/Talk/Talk'
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/blogDetail/:id' component={BlogDetail} />
            <Route path='/talk' component={Talk} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
